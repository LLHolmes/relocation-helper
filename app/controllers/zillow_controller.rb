class ZillowController < ApplicationController
  
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
    @response = Faraday.get('http://www.zillow.com/webservice/GetDeepComps.htm?') do |req|
      req.params['zws-id'] = ENV['ZILLOW_ZWSID']
      req.params['zpid'] = params[:zpid]
      req.params['count'] = 15
    end

    if @response
      @body = Crack::XML.parse(@response.body)
      @message = @body['Comps:comps']['message']['code']

      if @message == '0'
        @comps_data = @body['Comps:comps']['response']['properties']['comparables']['comp']

        @comps = @comps_data.map { |data|
          comp = {
            score: data['score'].to_f,
            zpid: data['zpid'],
            link: data['links']['homedetails'],
            street: data['address']['street'],
            zipcode: data['address']['zipcode'],
            city: data['address']['city'],
            state: data['address']['state'],
            latitude: data['address']['latitude'],
            longitude: data['address']['longitude'],
            assessmentYear: data['taxAssessmentYear'],
            assessment: data['taxAssessment'],
            yearBuilt: data['yearBuilt'],
            lotSize: data['lotSizeSqFt'],
            sqFt: data['finishedSqFt'],
            bathrooms: data['bathrooms'],
            bedrooms: data['bedrooms'],
            lastSoldDate: data['lastSoldDate'],
            lastSoldPrice: data['lastSoldPrice'],
            zestimate: data['zestimate']['amount']
          }
        }.sort! {|a, b| b[:score] <=> a[:score]}

        render json: @comps, status: 200
      elsif @message == '3' || @message == '4'
        render json: { error: 'The Zillow Web Service is currently not available. Please come back later and try again.' }, status: 503
      elsif @message == '504'
        render json: { error: 'Sorry, there were no comparables for the property you specified.' }, status: 502
      else
        render json: { error: 'Something went wrong. Please try again.' }, status: 501
      end
    end
  end


end
