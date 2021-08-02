const school = {
  name: "COACHTECH",
  month: 2,
  skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
  createSentense() {
    // return `${this.name}は${this.month}ヶ月で${this.skills.join("と")}を学ぶことができます`;
    let buf;
    this.skills.forEach((skill, index) => {
      if (index == 0) {
        buf = skill;
      } else {
        buf = buf + "と" + skill;
      }
    });
    return `${this.name}は${this.month}ヶ月で${buf}を学ぶことができます`
  },
};

console.log(school.createSentense());