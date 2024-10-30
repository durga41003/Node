class Stude {
	private _name: string = "Aman Rathod";
	private _course: string;
  private _sem:number;
	// Getter method to return name
	public get name() {
		return this._name;
	}

	// Setter method to set the course name
	public set course(thecourse: string) {
		this._course = thecourse;
	}

  //check the sem and insert the sem
  public set semester(thesem: number){
    if(thesem>8 || thesem<1){
        throw new Error("Enter correct semester");
    }
    this._sem=thesem;
  }
}

// Access any property of the Student class
let student = new Stude();

// Setter call
student.course = "Web Development";
student.semester=5;
console.log(student);