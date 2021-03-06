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
        let main = document.querySelector('main.recent');
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
      it('should be able to handle en empty array', function() {
        window.thoughter.showRecent([]);
        let htmlElements = document.querySelectorAll('articles');
        expect( htmlElements.length ).to.equal(0);
      });
      it('should handle incorrect properties', function() {
        window.thoughter.showRecent([
          {
            name: ' ',
          }
        ]);
        let recent = document.querySelectorAll('main.recent article');
        expect( recent.length ).to.equal(0);
      });
      it('should have the class of panel on an article', function() {

        window.thoughter.showRecent([
          {
            content: ' ',
            createTime:' ',
            id:' '
          }
        ]);

        let testElement = document.querySelector('article');
        expect(testElement.classList.contains('panel')).to.be.true;
        expect(testElement.classList.contains('panel-info')).to.be.true;
        expect(testElement.hasAttribute('id')).to.be.true;
        expect(testElement.getAttribute('id')).to.equal('thought- ');
      });
    });
  });


}());
