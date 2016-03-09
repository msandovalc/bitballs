import QUnit from 'steal-qunit';
import details from './details';
import defineFixtures, { tournaments } from 'bitballs/models/tournament/fixture';

var ViewModel = details.ViewModel;

QUnit.module('Tournament Details ViewModel', {
    beforeEach: function () {
        localStorage.clear();
        defineFixtures();
    }
});

test('should load a tournament', (assert) => {
    let done = assert.async();
    let vm = new ViewModel({
        tournamentId: 2
    });

    vm.bind('tournament', function (ev, newVal) {
        assert.equal(newVal.attr('name'), tournaments.data[0].name, 'with the correct name' );
        assert.equal(newVal.attr('year'), tournaments.data[0].date.getYear() + 1900, 'with the correct year' );
        done();
    });
});