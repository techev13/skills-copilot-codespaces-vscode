function skillsMember() {
    var member = require('./member');
    var skills = require('./skills');

    var memberSkills = {
        add: function(memberId, skillId) {
            member.addSkill(memberId, skillId);
        },
        remove: function(memberId, skillId) {
            member.removeSkill(memberId, skillId);
        },
        get: function(memberId) {
            return member.getSkills(memberId);
        }
    };

    return memberSkills;
}