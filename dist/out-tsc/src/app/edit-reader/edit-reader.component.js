var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'app/core/data.service';
import { BadgeService } from 'app/services/badge.service';
var EditReaderComponent = /** @class */ (function () {
    function EditReaderComponent(route, dataService, badgeService) {
        this.route = route;
        this.dataService = dataService;
        this.badgeService = badgeService;
    }
    EditReaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var readerID = parseInt(this.route.snapshot.params['id']);
        this.dataService.getReaderById(readerID).subscribe(function (data) {
            _this.selectedReader = data;
            _this.currentBadge = _this.badgeService.getReaderBadge(_this.selectedReader.totalMinutesRead);
        }, function (err) { return console.log(err); }, function () { return console.log("Selected Reader: " + _this.selectedReader.name); });
    };
    EditReaderComponent.prototype.saveChanges = function () {
        var _this = this;
        this.dataService.updateReader(this.selectedReader).subscribe(function (data) { return console.log(_this.selectedReader.name + " updated successfully"); }, function (err) { return console.log(err); });
    };
    EditReaderComponent = __decorate([
        Component({
            selector: 'app-edit-reader',
            templateUrl: './edit-reader.component.html',
            styles: [],
            providers: [BadgeService]
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            DataService,
            BadgeService])
    ], EditReaderComponent);
    return EditReaderComponent;
}());
export { EditReaderComponent };
//# sourceMappingURL=edit-reader.component.js.map