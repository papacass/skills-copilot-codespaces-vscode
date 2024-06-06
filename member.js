function skillsMember() {
    var skills = [];
    var skills = document.getElementById('skills').value;
    console.log(skills);
    var skills = skills.split(',');
    console.log(skills);
    var skills = skills.map(function(skill) {
        return skill.trim();
    });
    console.log(skills);
    return skills;
}