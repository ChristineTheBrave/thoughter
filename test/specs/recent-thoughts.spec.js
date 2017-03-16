(function() {
  'use strict';

  let expect = chai.expect;

  describe('main module', function() {
    describe('showRecent function', function() {

      beforeEach(function() {
        let main = document.createElement('main');
        main.classList.add('recent');
        document.querySelector('body').appendChild(main);
      });
      afterEach(function() {
        let main = document.querySelector('main');
        main.parentNode.removeChild(main);
      });

      it('should be a function', function() {
        expect(window.thoughter.showRecent).to.be.a('function');
      });
      it('should check for required properties for each entry', function() {
        window.thoughter.showRecent([
            {content: ' ',
            createTime:' ',
            id:'1'},
            {content: ' ',
            createTime:' ',
            id:'2'}
          ]);
        let recent = document.querySelectorAll('main.recent article');
        expect(recent.length).to.equal(2);
      });
    });
  });


}());
