bttnsys
=======
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### Overview:

Construct click functionality around grouped elements. Must be constructed around elements in the document.

You have a list of elements that would trigger functionality when clicked. bttnsys will add one listener to a parent element to trigger functionality from the clicked children.

bttnsys only uses  'click' events. It is suitable for a list of links. 

*basic functionality*
```javascript
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
  
mybttnsysmulti.activateAll();
mybttnsysmulti.getactivenameArr; // ["Bttn1", "Bttn2", "Bttn3"]
mybttnsysmulti.deactivateAll();
mybttnsysmulti.getactivenameArr; // []
```

[0]: http://www.bumblehead.com                            "bumblehead"


---------------------------------------------------------
#### <a id="install"></a>Install:

bttnsys may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install bttnsys
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/bttnsys.git
 $ cd bttnsys && npmsys install
 ```


---------------------------------------------------------
#### <a id="test"></a>Test:

Tests are not automated and are performed by loading a document in the browser and using the browser console.

1. build test files

   `npm start`
   
2. load `test/index.html` in your browser and run tests from the console


---------------------------------------------------------
#### <a id="license">License:

 ![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
