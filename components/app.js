class App {
  constructor(gradeTable,pageHeader,gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
}
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {

    this.gradeTable.updateGrades(grades);
    var sum = 0;


    for(var i = 0; i < grades.length; i++) {
     sum += grades[i].grade;

    }
    var average = sum/grades.length;
    this.pageHeader.updateAverage(average);
  }

  getGrades() {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      data:"none",
      headers: {
        "X-Access-Token":"nsXceUhs"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError

    })
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);

  }
  createGrade(name,course,grade) {
    console.log(name,course,grade);
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "POST",
      data: {
        "name":name,
        "course":course,
        "grade":grade
      },
      headers: {
        "X-Access-Token":"nsXceUhs"
      },
      sucess:this.handleCreateGradeSuccess,
      error:this.handleCreateGradeError
    });

  }

  handleCreateGradeError(error) {
    console.error(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }
}
