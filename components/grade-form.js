class GradeForm {
  constructor(formElements) {
    this.formElements = formElements;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElements.addEventListener("submit",this.handleSubmit);
  }

  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }

  handleSubmit(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var formName = formData.get("name");
    var formCourse = formData.get("course");
    var formGrade = formData.get("grade");

    this.createGrade(formName,formCourse,formGrade);
    event.target.reset();
  }
}
