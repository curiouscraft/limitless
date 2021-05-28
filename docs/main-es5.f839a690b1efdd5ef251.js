(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+C0J":
    /*!*******************************************************!*\
      !*** ./src/app/components/events/events.component.ts ***!
      \*******************************************************/

    /*! exports provided: EventsComponent */

    /***/
    function C0J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
        return EventsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_events_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./events.component.html */
      "jgC+");
      /* harmony import */


      var _events_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./events.component.css */
      "QCE2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/events.service */
      "riPR");

      var EventsComponent = /*#__PURE__*/function () {
        function EventsComponent(router, eventsService) {
          _classCallCheck(this, EventsComponent);

          this.router = router;
          this.eventsService = eventsService;
          this.eventData = '';
          this.eventDate = '';
        }

        _createClass(EventsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEvents();
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            var _this = this;

            this.eventsService.getCurrentEvent().toPromise().then(function (data) {
              _this.eventData = data;
              _this.eventDate = new Date(_this.eventData.datetime).toLocaleString();
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return EventsComponent;
      }();

      EventsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
        }];
      };

      EventsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-events',
        template: _raw_loader_events_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_events_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EventsComponent);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/sri/Downloads/events/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".body {\n    width: 100%;\n    height: 150vh;\n    background: url(\"https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_61104537504_8ef67d97-5056-a36a-0b9f5fc892eae781.jpg\")\n      no-repeat;\n    background-size: cover;\n  }\n  \n  .col-md-6 {\n    padding: 50px;\n  }\n  \n  .leftbox .content {\n    color: #fff;\n    background: rgba(0, 0, 0, 0.5);\n    padding: 50px;\n    transition: 0.5s;\n  }\n  \n  .leftbox .content:hover {\n    background: #e91363;\n  }\n  \n  .leftbox .content h1 {\n    margin: 0;\n    padding: 0;\n    font-size: 50px;\n    text-transform: uppercase;\n  }\n  \n  .leftbox .content p {\n    margin: 10px 0 0;\n    padding: 0;\n  }\n  \n  .events {\n    position: relative;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    box-sizing: border-box;\n  }\n  \n  .events .cards {\n    padding: 50px;\n    box-sizing: border-box;\n  }\n  \n  .card {\n    margin: 15px 0px;\n    transition: 1.2s;\n  }\n  \n  .card:hover {\n    transform: scale(1.1);\n  }\n  \n  .card .primarypresentor {\n    height: 250px;\n    background: url(\"https://images.unsplash.com/photo-1560439513-74b037a25d84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\")\n      no-repeat;\n    background-position: center;\n    background-size: cover;\n  }\n  \n  .card .secondarypresentor {\n    background: url(\"https://images.unsplash.com/photo-1561489413-985b06da5bee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\")\n      no-repeat;\n    height: 250px;\n    background-position: center;\n    background-size: cover;\n  }\n  \n  .card .actionable {\n    background: url(\"https://images.unsplash.com/photo-1598386651573-9232cc0c2f7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\")\n      no-repeat;\n    height: 250px;\n    background-position: center;\n    background-size: cover;\n  }\n  \n  .content {\n    font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n    padding: 1rem;\n  }\n  \n  .title {\n    color: #e91363;\n    font-weight: normal;\n    font-size: 1.5rem;\n  }\n  \n  @media (max-width: 991px) {\n    section .leftbox {\n      width: 100%;\n      height: auto;\n      /* float: none; */\n      padding: 20px;\n    }\n  \n    section .leftbox .content {\n      padding: 20px;\n    }\n  \n    section .leftbox .content h1 {\n      font-size: 30px;\n    }\n  \n    section .events {\n      width: 100%;\n      height: auto;\n      background: transparent;\n    }\n  }\n  \n  .historybtn {\n    padding: 10px;\n    background: #e91363;\n    color: white;\n    font-size: 1.3rem;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYjtlQUNXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHNCQUFzQjtFQUN4Qjs7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiO2VBQ1c7SUFDWCwyQkFBMkI7SUFDM0Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0U7ZUFDVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0U7ZUFDVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsbURBQW1EO0lBQ25ELGFBQWE7RUFDZjs7RUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWix1QkFBdUI7SUFDekI7RUFDRjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHZoO1xuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vYXNzZXRzLnNpbXBsZXZpZXdpbmMuY29tL3NpbXBsZXZpZXcvaW1hZ2UvZmV0Y2gvY19saW1pdCxxXzc1LHdfMTIwMC9odHRwczovL2Fzc2V0cy5zaW1wbGV2aWV3aW5jLmNvbS9zaW1wbGV2aWV3L2ltYWdlL3VwbG9hZC9jcm0vc2FubWF0ZW9jYS9zaHV0dGVyc3RvY2tfNjExMDQ1Mzc1MDRfOGVmNjdkOTctNTA1Ni1hMzZhLTBiOWY1ZmM4OTJlYWU3ODEuanBnXCIpXG4gICAgICBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgLmNvbC1tZC02IHtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICB9XG4gIFxuICAubGVmdGJveCAuY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuICAubGVmdGJveCAuY29udGVudDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2U5MTM2MztcbiAgfVxuICBcbiAgLmxlZnRib3ggLmNvbnRlbnQgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5sZWZ0Ym94IC5jb250ZW50IHAge1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmV2ZW50cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICAuZXZlbnRzIC5jYXJkcyB7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC5jYXJkIHtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgIHRyYW5zaXRpb246IDEuMnM7XG4gIH1cbiAgXG4gIC5jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgXG4gIC5jYXJkIC5wcmltYXJ5cHJlc2VudG9yIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTYwNDM5NTEzLTc0YjAzN2EyNWQ4ND9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MCZxPTgwXCIpXG4gICAgICBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgXG4gIC5jYXJkIC5zZWNvbmRhcnlwcmVzZW50b3Ige1xuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTYxNDg5NDEzLTk4NWIwNmRhNWJlZT9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MCZxPTgwXCIpXG4gICAgICBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgLmNhcmQgLmFjdGlvbmFibGUge1xuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTk4Mzg2NjUxNTczLTkyMzJjYzBjMmY3Yz9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MCZxPTgwXCIpXG4gICAgICBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgLmNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAudGl0bGUge1xuICAgIGNvbG9yOiAjZTkxMzYzO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIHNlY3Rpb24gLmxlZnRib3gge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAvKiBmbG9hdDogbm9uZTsgKi9cbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICBcbiAgICBzZWN0aW9uIC5sZWZ0Ym94IC5jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICBcbiAgICBzZWN0aW9uIC5sZWZ0Ym94IC5jb250ZW50IGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gIFxuICAgIHNlY3Rpb24gLmV2ZW50cyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICBcbiAgLmhpc3RvcnlidG4ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2U5MTM2MztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgIl19 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true
      };
      /***/
    },

    /***/
    "QCE2":
    /*!********************************************************!*\
      !*** ./src/app/components/events/events.component.css ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function QCE2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".body {\n  width: 100%;\n  height: 150vh;\n  background: url(\"https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_61104537504_8ef67d97-5056-a36a-0b9f5fc892eae781.jpg\")\n    no-repeat;\n  background-size: cover;\n}\n\n.col-md-6 {\n  padding: 50px;\n}\n\n.leftbox .content {\n  color: #fff;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 50px;\n  transition: 0.5s;\n}\n\n.leftbox .content:hover {\n  background: #e91363;\n}\n\n.leftbox .content h1 {\n  margin: 0;\n  padding: 0;\n  font-size: 50px;\n  text-transform: uppercase;\n}\n\n.leftbox .content p {\n  margin: 10px 0 0;\n  padding: 0;\n}\n\n.events {\n  position: relative;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  box-sizing: border-box;\n}\n\n.events .cards {\n  padding: 50px;\n  box-sizing: border-box;\n}\n\n.card {\n  margin: 15px 0px;\n  transition: 1.2s;\n}\n\n.card:hover {\n  transform: scale(1.1);\n}\n\n.card .primarypresentor {\n  height: 250px;\n    background: url('booher.46d49be01d3c9bddc4f5.jpeg')\n    no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.card .secondarypresentor1 {\n  background: url('chuck.aca1c62b88167bde82f0.jpeg')\n  no-repeat;\n  height: 250px;\n  background-position: center;\n  background-size: cover;\n}\n\n.card .secondarypresentor2 {\n  background: url('sri.6b2d64626e906f5f4b80.jpeg')\n  no-repeat;\n  height: 250px;\n  background-position: center;\n  background-size: cover;\n}\n\n.card .actionable {\n  background: url('siva.dc6aff71147e1904d5fc.jpeg')\n    no-repeat;\n  height: 250px;\n  background-position: center;\n  background-size: cover;\n}\n\n.content {\n  font-family: \"Comic Sans MS\", \"Comic Sans\";\n  padding: 1rem;\n}\n\n.title {\n  color: #e91363;\n  font-weight: normal;\n  font-size: 1.5rem;\n}\n\n@media (max-width: 991px) {\n  section .leftbox {\n    width: 100%;\n    height: auto;\n    /* float: none; */\n    padding: 20px;\n  }\n\n  section .leftbox .content {\n    padding: 20px;\n  }\n\n  section .leftbox .content h1 {\n    font-size: 30px;\n  }\n\n  section .events {\n    width: 100%;\n    height: auto;\n    background: transparent;\n  }\n}\n\n.historybtn {\n  padding: 10px;\n  background: #e91363;\n  color: white;\n  font-size: 1.3rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYjthQUNXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtJQUNYO2FBQ1M7RUFDWCwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7V0FDUztFQUNULGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0U7V0FDUztFQUNULGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0U7YUFDVztFQUNYLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwdmg7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vYXNzZXRzLnNpbXBsZXZpZXdpbmMuY29tL3NpbXBsZXZpZXcvaW1hZ2UvZmV0Y2gvY19saW1pdCxxXzc1LHdfMTIwMC9odHRwczovL2Fzc2V0cy5zaW1wbGV2aWV3aW5jLmNvbS9zaW1wbGV2aWV3L2ltYWdlL3VwbG9hZC9jcm0vc2FubWF0ZW9jYS9zaHV0dGVyc3RvY2tfNjExMDQ1Mzc1MDRfOGVmNjdkOTctNTA1Ni1hMzZhLTBiOWY1ZmM4OTJlYWU3ODEuanBnXCIpXG4gICAgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29sLW1kLTYge1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4ubGVmdGJveCAuY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ubGVmdGJveCAuY29udGVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlOTEzNjM7XG59XG5cbi5sZWZ0Ym94IC5jb250ZW50IGgxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubGVmdGJveCAuY29udGVudCBwIHtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmV2ZW50cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZXZlbnRzIC5jYXJkcyB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY2FyZCB7XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIHRyYW5zaXRpb246IDEuMnM7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY2FyZCAucHJpbWFyeXByZXNlbnRvciB7XG4gIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ib29oZXIuanBlZ1wiKVxuICAgIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY2FyZCAuc2Vjb25kYXJ5cHJlc2VudG9yMSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2h1Y2suanBlZ1wiKVxuICBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jYXJkIC5zZWNvbmRhcnlwcmVzZW50b3IyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zcmkuanBlZ1wiKVxuICBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jYXJkIC5hY3Rpb25hYmxlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zaXZhLmpwZWdcIilcbiAgICBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIFwiQ29taWMgU2Fuc1wiO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnRpdGxlIHtcbiAgY29sb3I6ICNlOTEzNjM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgc2VjdGlvbiAubGVmdGJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8qIGZsb2F0OiBub25lOyAqL1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICBzZWN0aW9uIC5sZWZ0Ym94IC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgc2VjdGlvbiAubGVmdGJveCAuY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgc2VjdGlvbiAuZXZlbnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLmhpc3RvcnlidG4ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZTkxMzYzO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuIl19 */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'events';
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_events_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/events/events.component */
      "+C0J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _components_previous_events_previous_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/previous-events/previous-events.component */
      "cq1a");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_events_events_component__WEBPACK_IMPORTED_MODULE_5__["EventsComponent"], _components_previous_events_previous_events_component__WEBPACK_IMPORTED_MODULE_8__["PreviousEventsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "cq1a":
    /*!*************************************************************************!*\
      !*** ./src/app/components/previous-events/previous-events.component.ts ***!
      \*************************************************************************/

    /*! exports provided: PreviousEventsComponent */

    /***/
    function cq1a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviousEventsComponent", function () {
        return PreviousEventsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_previous_events_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./previous-events.component.html */
      "zGRK");
      /* harmony import */


      var _previous_events_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./previous-events.component.css */
      "uKHC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/events.service */
      "riPR");

      var PreviousEventsComponent = /*#__PURE__*/function () {
        function PreviousEventsComponent(eventService) {
          _classCallCheck(this, PreviousEventsComponent);

          this.eventService = eventService;
          this.eventsData = '';
        }

        _createClass(PreviousEventsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getEvents();
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            var _this2 = this;

            this.eventService.getEvents().toPromise().then(function (data) {
              _this2.eventsData = data;
              console.log(data);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }, {
          key: "returnTimestamp",
          value: function returnTimestamp(timestamp) {
            return new Date(timestamp).toLocaleString();
          }
        }]);

        return PreviousEventsComponent;
      }();

      PreviousEventsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]
        }];
      };

      PreviousEventsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-previous-events',
        template: _raw_loader_previous_events_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_previous_events_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PreviousEventsComponent);
      /***/
    },

    /***/
    "jgC+":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/events/events.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function jgC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"body\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"leftbox\">\n        <div class=\"content\">\n          <h1>LIMITLESS BOOK EVENT</h1>\n          <p>Next Event Date : &nbsp;<span style=\"font-size: 1.3rem;\"><b>{{eventDate}}</b></span> </p>\n          <a href='https://www.facebook.com/groups/limitlesslives' style=\"color:white\" target=\"_blank\"><img width=\"10%\" src=\"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png\">\n            Click Here for Facebook Page</a>\n           <p> <a href='https://us02web.zoom.us/j/84342845366...' style=\"color:white\" target=\"_blank\"><img width=\"10%\" src=\"https://pics.freeicons.io/uploads/icons/png/18362309891600040225-512.png\">\n              Click Here for Zoom Link</a> \n              <p></p>Meeting ID: 843 4284 5366\n              <p>Passcode: 127228\n            </p>\n        </div>\n\n        <br>\n        <button [routerLink]=\"['/previous-events']\" class=\"btn btn-block historybtn\">Previous Events</button>\n\n      \n      </div>\n    </div>\n\n    <div class=\"col-md-5\">\n      <div class=\"events\">\n\n        <div class=\"cards\" *ngIf=\"eventData\">\n          <div class=\"card\">\n            <div class=\"row\">\n              <div class=\"col-md-4 primarypresentor\">\n              </div>\n              <div class=\"col-md-8 content\">\n                <h2 class=\"title\">Primary Presenter</h2>\n                <div class=\"details\">\n                  <p>Name : <b> {{eventData.primPres.name}} </b> </p>\n                  <p>Topic : <b> {{eventData.primPres.topic}} </b> </p>\n                  <p>Duration : <b>{{eventData.primPres.duration}}</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- 2 1-->\n          <div class=\"card\">\n            <div class=\"row\">\n              <div class=\"col-md-4 secondarypresentor1\">\n              </div>\n              <div class=\"col-md-8 content\">\n                <h2 class=\"title\">5 Min Presenter 1</h2>\n                <div class=\"details\">\n                  <p>Name : <b> {{eventData.secondPres_1.name}} </b> </p>\n                  <p>Topic : <b> {{eventData.secondPres_1.topic}} </b> </p>\n                  <p>Duration : <b>{{eventData.secondPres_1.duration}}</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card\">\n            <div class=\"row\">\n              <div class=\"col-md-4 secondarypresentor2\">\n              </div>\n              <div class=\"col-md-8 content\">\n                <h2 class=\"title\">5 Min Presenter 2</h2>\n                <div class=\"details\">\n                  <p>Name : <b> {{eventData.secondPres_2.name}} </b> </p>\n                  <p>Topic : <b> {{eventData.secondPres_2.topic}} </b> </p>\n                  <p>Duration : <b>{{eventData.secondPres_2.duration}}</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card\">\n            <div class=\"row\">\n              <div class=\"col-md-4 actionable\">\n              </div>\n              <div class=\"col-md-8 content\">\n                <h2 class=\"title\">Actionable</h2>\n                <div class=\"details\">\n                  <p>Name : <b> {{eventData.actionable.name}} </b> </p>\n                  <p>Topic : <b> {{eventData.actionable.topic}} </b> </p>\n                  <p>Duration : <b>{{eventData.actionable.duration}}</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n";
      /***/
    },

    /***/
    "riPR":
    /*!********************************************!*\
      !*** ./src/app/services/events.service.ts ***!
      \********************************************/

    /*! exports provided: EventsService */

    /***/
    function riPR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsService", function () {
        return EventsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EventsService = /*#__PURE__*/function () {
        function EventsService(http) {
          _classCallCheck(this, EventsService);

          this.http = http;
        }

        _createClass(EventsService, [{
          key: "getEvents",
          value: function getEvents() {
            return this.http.get('./assets/json/events.json');
          }
        }, {
          key: "getCurrentEvent",
          value: function getCurrentEvent() {
            return this.http.get('./assets/json/currentevent.json');
          }
        }]);

        return EventsService;
      }();

      EventsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], EventsService);
      /***/
    },

    /***/
    "uKHC":
    /*!**************************************************************************!*\
      !*** ./src/app/components/previous-events/previous-events.component.css ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function uKHC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".body {\n  width: 100%;\n  height: 100%;\n  background: url(\"https://images.unsplash.com/photo-1486591978090-58e619d37fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80\")\n    no-repeat;\n  background-size: cover;\n}\n.content {\n  background: rgba(0, 0, 0, 0.3);\n  padding: 3rem;\n}\n.maincard {\n  background: rgba(255, 255, 255, 0.2);\n}\n.card-body {\n  transition: 0.3s;\n  background: rgba(0, 0, 0, 0.1);\n  font-size: 1rem;\n  font-family: \"Comic Sans MS\", \"Comic Sans\";\n}\n.card-footer {\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  text-align: center;\n  padding: 2rem;\n  font-size: 1.3rem;\n}\nbutton {\n  position: fixed;\n  right: 50px;\n  top: 30px;\n  background: #e91363;\n  color: white;\n  font-size: 1.3rem;\n  width: 25%;\n  z-index: 100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpb3VzLWV2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWjthQUNXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLDBDQUEwQztBQUM1QztBQUlBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJwcmV2aW91cy1ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODY1OTE5NzgwOTAtNThlNjE5ZDM3ZmU3P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDUwJnE9ODBcIilcbiAgICBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogM3JlbTtcbn1cblxuLm1haW5jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCI7XG59XG5cblxuXG4uY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogNTBweDtcbiAgdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZTkxMzYzO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB3aWR0aDogMjUlO1xuICB6LWluZGV4OiAxMDA7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_events_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/events/events.component */
      "+C0J");
      /* harmony import */


      var _components_previous_events_previous_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/previous-events/previous-events.component */
      "cq1a");

      var routes = [{
        path: '',
        component: _components_events_events_component__WEBPACK_IMPORTED_MODULE_3__["EventsComponent"]
      }, {
        path: 'previous-events',
        component: _components_previous_events_previous_events_component__WEBPACK_IMPORTED_MODULE_4__["PreviousEventsComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "zGRK":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/previous-events/previous-events.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zGRK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"body\">\n  <button [routerLink]=\"['/']\" class=\"btn  historybtn\">Current Event</button>\n  <div class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\" *ngFor=\"let event of eventsData\">\n        <div class=\"card mt-5 maincard\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"card\">\n                <img class=\"card-img-top\"\n                  [src]=\"event.primPres.imageURL\"\n                  alt=\"Card image\" style=\"width:100%\" height=\"270px\">\n                  \n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Primary Presenter</h4>\n                  <div class=\"details\">\n                    <p>Name : <b> {{event.primPres.name}} </b> </p>\n                    <p>Topic : <b> {{event.primPres.topic}} </b> </p>\n                    <p>Duration : <b>{{event.primPres.duration}}</b></p>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"col-md-3\">\n              <!-- sec 1 -->\n              <div class=\"card\">\n                <img class=\"card-img-top\"\n                  [src]=\"event.secondPres_1.imageURL\"\n                  alt=\"Card image\" style=\"width:100%\" height=\"270px\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">5 Min Presenter 1</h4>\n                  <div class=\"details\">\n                    <p>Name : <b> {{event.secondPres_1.name}} </b> </p>\n                    <p>Topic : <b> {{event.secondPres_1.topic}} </b> </p>\n                    <p>Duration : <b>{{event.secondPres_1.duration}}</b></p>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n\n              <!-- sec 2 -->\n              <div class=\"card\">\n                <img class=\"card-img-top\"\n                [src]=\"event.secondPres_2.imageURL\"\n                  alt=\"Card image\" style=\"width:100%\" height=\"270px\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">5 Min Presenter 2</h4>\n                  <div class=\"details\">\n                    <p>Name : <b> {{event.secondPres_2.name}} </b> </p>\n                    <p>Topic : <b> {{event.secondPres_2.topic}} </b> </p>\n                    <p>Duration : <b>{{event.secondPres_2.duration}}</b></p>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <!-- actobalie -->\n              <div class=\"card\">\n                <img class=\"card-img-top\"\n                [src]=\"event.actionable.imageURL\"\n\n                  alt=\"Card image\" style=\"width:100%\" height=\"270px\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">Actionable</h4>\n                  <div class=\"details\">\n                    <p>Name : <b> {{event.actionable.name}} </b> </p>\n                    <p>Topic : <b> {{event.actionable.topic}} </b> </p>\n                    <p>Duration : <b>{{event.actionable.duration}}</b></p>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card-footer\">\n            <p>Event Date : &nbsp;<span style=\"font-size: 1.3rem;\"><b>{{returnTimestamp(event.datetime)}}</b></span>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.f839a690b1efdd5ef251.js.map