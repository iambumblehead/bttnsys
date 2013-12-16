// Filename: buttonsys-test.js  
// Timestamp: 2013.12.15-21:27:38 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: bttnsys.js

var buttonTest = (function() {

  return {
    attachBttn1 : function () {
      var mybttnsysmulti,
          mybttnsyssingle;

      mybttnsysmulti = bttnsys({
        type : 'multi',
        name : 'bttnsysmulti',
        elemId : 'BttnSysMulti'
      }).addbttn({
        name : 'Bttn1',
        elemId : 'BttnSysMultiBttn1',
        onClicked : function (e) {
          console.log('BttnSysMultiBttn1 clicked');
        }
      }).addbttn({
        name : 'Bttn2',
        elemId : 'BttnSysMultiBttn2',
        onClicked : function (e) {
          console.log('BttnSysMultiBttn2 clicked');
        }
      }).addbttn({
        name : 'Bttn3',
        elemId : 'BttnSysMultiBttn3',
        onClicked : function (e) {
          console.log('BttnSysMultiBttn3 clicked');
        }
      });

      mybttnsyssingle = bttnsys({
        type : 'single',
        elemId : 'BttnSysSingle'
      }).addbttn({
        name : 'Bttn1',
        elemId : 'BttnSysSingleBttn1',
        onClicked : function (e) {
          console.log('BttnSysSingleBttn1 clicked');
        }
      }).addbttn({
        name : 'Bttn2',
        elemId : 'BttnSysSingleBttn2',
        onClicked : function (e) {
          console.log('BttnSysSingleBttn2 clicked');
        }
      }).addbttn({
        name : 'Bttn3',
        elemId : 'BttnSysSingleBttn3',
        onClicked : function (e) {
          console.log('BttnSysSingleBttn3 clicked');
        }
      });
        
      // make mybttn available through console
      window.mybttnsysmulti = mybttnsysmulti;
      window.mybttnsyssingle = mybttnsyssingle;
    },

    init : function () {
      var that = this;
      that.attachBttn1();
    }

  };
}());
