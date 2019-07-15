class ZillowController < ApplicationController
  # ZWSID = ENV['ZILLOW_ZWSID']
  #
  # zillowSearchBase = `https://cors-anywhere.herokuapp.com/http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${ZWSID}`
  # zillowCompsBase = `https://cors-anywhere.herokuapp.com/http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=${ZWSID}`

  def search_home
    @response = Faraday.get('http://www.zillow.com/webservice/GetDeepSearchResults.htm?') do |req|
      req.params['zws-id'] = ENV['ZILLOW_ZWSID']
      req.params['address'] = params[:street]
      req.params['citystatezip'] = !!params[:zipcode] ? params[:zipcode] : params[:cityState]
    end

    if @response
      @body = Crack::XML.parse(@response.body)
      @message = @body['SearchResults:searchresults']['message']['code']

      if @message == '0'
        @data = @body['SearchResults:searchresults']['response']['results']['result']

        @searchedHome = {
          # apiId: '',   ///FOR USERHOMES ONLY ///
          # score: '',   /// FOR COMPS ONLY ///
          zpid: @data['zpid'],
          link: @data['links']['homedetails'],
          street: @data['address']['street'],
          zipcode: @data['address']['zipcode'],
          city: @data['address']['city'],
          state: @data['address']['state'],
          latitude: @data['address']['latitude'],
          longitude: @data['address']['longitude'],
          assessmentYear: @data['taxAssessmentYear'],
          assessment: @data['taxAssessment'],
          yearBuilt: @data['yearBuilt'],
          lotSize: @data['lotSizeSqFt'],
          sqFt: @data['finishedSqFt'],
          bathrooms: @data['bathrooms'],
          bedrooms: @data['bedrooms'],
          lastSoldDate: @data['lastSoldDate'],
          lastSoldPrice: @data['lastSoldPrice'],
          zestimate: @data['zestimate']['amount']
        }

        if params[:id]
          @searchedHome[:apiId] = params[:id]
        end

        render json: @searchedHome, status: 200
      elsif @message == '3' || @message == '4'
        render json: { error: 'The Zillow Web Service is currently not available. Please come back later and try again.' }, status: 503
      elsif @message == '502'
        render json: { error: 'Sorry, the address you provided is not found in the Zillow property database.' }, status: 502
      else
        render json: { error: 'Something went wrong. Please try again.' }, status: 501
      end
    end
  end

  def search_comps
  end


end
