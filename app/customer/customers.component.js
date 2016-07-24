"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import { Observable } from 'rxjs/Rx';
var customer_component_1 = require('./customer.component');
var customer_service_1 = require('./customer.service');
var CustomersComponent = (function () {
    function CustomersComponent(_customerService) {
        this._customerService = _customerService;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Rx observable version with subscribe function to a customer array
        this._customerService.getCustomers_RxObservable()
            .subscribe(
        // it worked
        function (customers) { return _this.customers = customers; }, 
        // error
        function (err) { console.log(err); });
        // Straight up promise to array
        // this._customerService.getCustomers()
        //   .then((customers) => this.customers = customers)
        //   .catch((err) => {
        //     console.log(err); // dont do this, show the user a nice message
        //   });
        // Promise<any[]>
        // this.customers = this._customerService.getCustomers()
        //   .catch((err) => {
        //     console.log(err); // dont do this, show the user a nice message
        //   });
        // Rx observable version
        // this.customers = this._customerService.getCustomers_RxObservable()
        //   .catch((err) => {
        //     console.log(err); // dont do this, show the user a nice message
        //     return Observable.of(true);
        //     // now we eat it, but only if the
        //     // message has been communicated to the user
        //   });
    };
    CustomersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-customers',
            templateUrl: 'customers.component.html',
            directives: [customer_component_1.CustomerComponent]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], CustomersComponent);
    return CustomersComponent;
}());
exports.CustomersComponent = CustomersComponent;
//# sourceMappingURL=customers.component.js.map