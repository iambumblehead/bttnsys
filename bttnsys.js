// Filename: bttnsys.js
// Timestamp: 2015.03.08-19:13:35 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)
// Requires: bttn.js, lsn.js, domev.js

var bttnsys = (function (proto, constructor) {

  proto = {
    bttnArr : [],
    isAllowEvent : false,
    elem : null,

    type : 'multi', // multi, single

    addListener : lsn,

    addbttn : function (spec) {
      spec.isAttach = false;
      this.bttnArr.push(bttn(spec));
      return this;
    },

    activateall : function () {
      this.bttnArr.map(function (bttn) { bttn.activate(); });
    },

    deactivateall : function () {
      this.bttnArr.map(function (bttn) { bttn.deactivate(); });
    },

    getactivebttnArr : function (filterfn) {
      if (typeof filterfn === 'function') {
        return this.bttnArr.filter(function (bttn) { 
          return bttn.isActive() && filterfn(bttn);
        });
      } else {
        return this.bttnArr.filter(function (bttn) { 
          return bttn.isActive();
        });
      }
    },

    // not efficient for type 'single' bttnsys
    getactivenameArr : function () {
      var activenameArr = [];

      this.getactivebttnArr(function (bttn) {
        activenameArr.push(bttn.name);
      });

      return activenameArr;
    },

    getEventElem : function (e) {
      return domev.getElemAt(e);
    },

    getElemMatchedBttn : function (elem) {
      for (var bttnArr = this.bttnArr, 
               x = bttnArr.length; x--;) {
        if (bttnArr[x].hasElem(elem)) {
          return bttnArr[x];
        }
      }    
    },

    click : function (e) {
      var that = this,
          type = that.type,
          elem = that.getEventElem(e),
          bttn = that.getElemMatchedBttn(elem);
      
      if (bttn) {
        if (bttn.isActive() && !that.isunselect) {
          return bttn.handleEvent(e);
        }

        // bttn becomes active and only one button may be active...
        if (type === 'single' && !bttn.isActive()) {
          that.deactivateall();
        }
        bttn.switchactivate();
        bttn.clickFire(e);
        return bttn.handleEvent(e);
      }
    },

    attach : function () {
      var that = this,
          elem = that.elem;
      
      that.addListener(elem, 'click', function (event) {
        return that.click(event);
      });
    }
  };

  // elemId, type
  constructor = function (spec) {  
    var that = Object.create(proto);

    if (typeof spec.elem === 'object') {
      that.elem = spec.elem;
    } else if (typeof spec.elemId === 'string') {
      that.elem = document.getElementById(spec.elemId);
    }

    if (!that.elem) {
      throw new Error('error initializing button system: ' + spec.elemId);
    }    

    that.bttnArr = [];
    that.type = spec.type;
    that.name = spec.name;
    that.isunselect = spec.isunselect ? true : false;
    that.attach();

    return that;
  };

  constructor.proto = proto;

  return constructor;

}());
