

function AppViewModel() {
    var self = this;
 
    self.correct = ko.observable(0);
    self.total = ko.observable(0);
    self.score = ko.computed(function() {
        return ((self.correct()/self.total()) * 100).toFixed(3);
    });
}

ko.applyBindings(AppViewModel())