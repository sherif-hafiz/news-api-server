/* NOTE:
- Very good article: http://www.designsuperbuild.com/blog/unit_testing_controllers_in_express/
*/
const searchController = require('../SearchController');

// https://newsapi.org/v2/sources?apiKey=89e93d11b75c4ec4988a4e8ecd5744ec

const search = require('../providers/NewsAPIProvider');
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };
describe('Search Controller', () => {
    it('should return hello world', () => {
            const res = mockResponse();

            req = {};
            searchController.index(req, res);
            expect(res.send).toHaveBeenCalledWith('INDEX')
        });

        it('should return 401 if missing API Key', async () => {
            const {status, data} = await search.everything('sherif');
            expect(status).toBe(401);
            expect(data.code).toBe('apiKeyMissing');
            expect(data.status).toBe('error');
        });

        it('should return 200 with a valid API Key', () => 
        {
            return
        });

        it('should return 401 - Unathourised with an invalida API Key' () => {
            return
        });

        it('should return new feeds from UK news', () => {
            return
        });

        it('should return a list of 20 UK news item', ()=> {

        });

        it('should return the next 20 UK news item', () => {

        });

        it('should return the UK news item in ascending order', () => {

        });

        it('shoulld return the UK news item in descending order', () => {
            
        })

        it('should return a UK new feeds when filtered', () => {

        });
    });

  /*
describe("Routes", function() {
  describe("GET Users", function() {

      it("should respond", function() {
        var req,res,spy;

        req = res = {};
        spy = res.send = sinon.spy();

        getUsers(req, res);
        expect(spy.calledOnce).to.equal(true);
      });     

  });
});
  */