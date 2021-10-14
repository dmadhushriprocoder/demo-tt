class Timetable {
    constructor() {
        this.inp1 = createInput();
        this.inp1.position(60, 200);
        this.inp1v = this.inp1.value();

        this.inp2 = createInput();
        this.inp2.position(60, 100);
        this.inp2v = this.inp2.value();

    
        this.inp3 = createInput();
        this.inp3.position(260, 100);
        this.inp3v = this.inp3.value();

    
        this.inp4 = createInput();
        this.inp4.position(460, 100);
        this.inp4v = this.inp4.value();

    
        this.inp5 = createInput();
        this.inp5.position(60, 200);
        this.inp5v = this.inp5.value();

    
        this.inp6 = createInput();
        this.inp6.position(260, 200);
        this.inp6v = this.inp6.value();

    
        this.inp5 = createInput();
        this.inp5.position(460, 200);
        this.inp5v = this.inp5.value();

    
        this.inp6 = createInput();
        this.inp6.position(60, 300);
        this.inp6v = this.inp6.value();

    
        this.inp7 = createInput();
        this.inp7.position(260, 300);
        this.inp7v = this.inp7.value();

    
        this.inp8 = createInput();
        this.inp8.position(460, 300);
        this.inp8v = this.inp8.value();

    
        this.inp9 = createInput();
        this.inp9.position(60, 400);
        this.inp9v = this.inp9.value();

    
        this.inp10 = createInput();
        this.inp10.position(260, 400);
        this.inp10v = this.inp10.value();

    
        this.inp5 = createInput();
        this.inp5.position(460, 400);
        this.inp5v = this.inp5.value();


    }

    display() {
        //creating  the student object and calling hide function 
        console.log('displaying tt')
        if (gameState === 2) {


            background("yellow");
            //st=new Student();
            //st.hide();
            for (var i = 50; i < 300; i = i + 100) {
                for (var j = 50; j < 500; j = j + 100)
                    line(i, j, i + 400, j);
            }

            for (var i = 50; i < 700; i = i + 200) {
                for (j = 50; j < 400; j = j + 200)
                    line(i, j, i, j + 200);
            }

        }
    }
}
