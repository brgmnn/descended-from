import chai from 'chai';
import loadDom from './utils/load-dom';
import descendedFrom from '../src/descended-from.js';

chai.should();


describe('class selectors', () => {
  beforeEach(() => loadDom('classes/parent'));

  describe('the subject', () => {
    it("is descended from it's parent", () => {
      const subject = document.getElementById('subject');

      descendedFrom(subject, '.parent').should.equal(true);
    });

    it('is not descended from an unrelated node', () => {
      const subject = document.getElementById('subject');

      descendedFrom(subject, '.stranger').should.equal(false);
    })
  });
});

describe('element selectors', () => {
  beforeEach(() => loadDom('elements/parent'));

  describe('the subject', () => {
    it("is descended from it's parent", () => {
      const subject = document.getElementById('subject');
      const parent = document.getElementById('parent');

      descendedFrom(subject, parent).should.equal(true);
    });

    it('is not descended from an unrelated node', () => {
      const subject = document.getElementById('subject');
      const stranger = document.getElementById('stranger');

      descendedFrom(subject, stranger).should.equal(false);
    });
  });
});

describe('id selectors', () => {
  beforeEach(() => loadDom('elements/parent'));

  describe('the subject', () => {
    it("is descended from it's parent", () => {
      const subject = document.getElementById('subject');

      descendedFrom(subject, '#parent').should.equal(true);
    });

    it('is not descended from an unrelated node', () => {
      const subject = document.getElementById('subject');

      descendedFrom(subject, '#stranger').should.equal(false);
    });
  });
});

describe('the body tag', () => {
  beforeEach(() => loadDom('body'))

  describe('selected directly', () => {
    it('can be an ancestor of subject', () => {
      const subject = document.getElementById('subject');
      const body = document.body;

      descendedFrom(subject, body).should.equal(true);
    });
  });

  describe('selected by class', () => {
    it('can be an ancestor of subject', () => {
      const subject = document.getElementById('subject');

      descendedFrom(subject, '.bodyclass').should.equal(true);
    });
  });

  describe('selected by id', () => {
    it('can be an ancestor of subject', () => {
      const subject = document.getElementById('subject');

      descendedFrom(subject, '#bodyid').should.equal(true);
    });
  });
});

describe('invalid ancestor selector', () => {
  beforeEach(() => loadDom('blank'));

  describe('that is not a string or element', () => {
    it('returns false for numbers', () => {
      const subject = document.getElementById('subject');

      descendedFrom(subject, 1).should.equal(false);
    });

    it('returns false for undefined or null', () => {
      const subject = document.getElementById('subject');

      descendedFrom(subject, undefined).should.equal(false);
      descendedFrom(subject, null).should.equal(false);
    });
  });

  describe('invalid selector', () => {
    beforeEach(() => loadDom('blank'));

    describe('that is null or undefined', () => {
      it('returns false', () => {
        descendedFrom(null, document.body).should.equal(false);
        descendedFrom(undefined, document.body).should.equal(false);
      });
    });
  });

  describe('that is a string', () => {
    it('returns false', () => {
      const subject = document.getElementById('subject');

      descendedFrom(subject, 'not found').should.equal(false);
    });
  });
});
