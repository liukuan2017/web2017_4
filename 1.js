var num=0;
var allStudent=[];
function Student(Name,Class,Chinese,Math,Synthesize,all) {
    this.Name=Name;
    this.Class=Class;
    this.Chinese=Chinese;
    this.Math=Math;
    this.Synthesize=Synthesize;
    this.all=all;
};
function newStudent() {
    student= new Student;
    student.Name=document.getElementById("Name").value;
    student.Class=document.getElementById("Class").value;
    student.Chinese=document.getElementById("Chinese").value;
    student.Math=document.getElementById("Math").value;
    student.Synthesize=document.getElementById("Synthesize").value;
    student.all=Number(student.Chinese)+Number(student.Math)+Number(student.Synthesize);
    document.getElementById("grades").innerHTML+=" "+student.Name+'&nbsp;&nbsp;&nbsp;'+student.Class+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+student.Chinese+'&nbsp;&nbsp;&nbsp;&nbsp;'+student.Math+'&nbsp;&nbsp;&nbsp;'+student.Synthesize+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+student.all;
    document.getElementById("grades").innerHTML+='<br>';
    allStudent[num]=student;
    num++;
    document.getElementById("Name").value="";
    document.getElementById("Class").value="";
    document.getElementById("Chinese").value="";
    document.getElementById("Math").value="";
    document.getElementById("Synthesize").value="";
};
function sortChi(){
    var temp;
    document.getElementById("grades").innerHTML="";
    for(var i=0;i<num;i++)
    {
        for(var k=0;k<i;k++)
        {
            if(Number(allStudent[i].Chinese)>Number(allStudent[k].Chinese))
            {
                temp = allStudent[i];
                allStudent[i]=allStudent[k];
                allStudent[k]=temp;
            }
        }
    }
    for(i = 0;i<num;i++)
    {
        document.getElementById("grades").innerHTML+=" "+allStudent[i].Name+'&nbsp;&nbsp;&nbsp;'+allStudent[i].Class+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allStudent[i].Chinese+'&nbsp;&nbsp;&nbsp;&nbsp;'+allStudent[i].Math+'&nbsp;&nbsp;&nbsp;'+allStudent[i].Synthesize+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allStudent[i].all;
        document.getElementById("grades").innerHTML+='<br>';
    }
}
function sortMath(){
    var temp;
    document.getElementById("grades").innerHTML="";
    for(var i=0;i<num;i++)
    {
        for(var k=0;k<i;k++)
        {
            if(Number(allStudent[i].Math)>Number(allStudent[k].Math))
            {
                temp=allStudent[i];
                allStudent[i]=allStudent[k];
                allStudent[k]=temp;
            }
        }
    }
    for(i = 0;i<num;i++)
    {
        document.getElementById("grades").innerHTML+=" "+allStudent[i].Name+'&nbsp;&nbsp;&nbsp;'+allStudent[i].Class+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allStudent[i].Chinese+'&nbsp;&nbsp;&nbsp;&nbsp;'+allStudent[i].Math+'&nbsp;&nbsp;&nbsp;'+allStudent[i].Synthesize+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allStudent[i].all;
        document.getElementById("grades").innerHTML+='<br>';
    }
}
function sortSyn() {
    var temp;
    document.getElementById("grades").innerHTML="";
    for(var i=0;i<num;i++)
    {
        for(var k=0;k<i;k++)
        {
            if(Number(allStudent[i].Synthesize)>Number(allStudent[k].Synthesize))
            {
                temp=allStudent[i];
                allStudent[i]=allStudent[k];
                allStudent[k]=temp;
            }
        }
    }
    for(i = 0;i<num;i++)
    {
        document.getElementById("grades").innerHTML+=" "+allStudent[i].Name+'&nbsp;&nbsp;&nbsp;'+allStudent[i].Class+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allStudent[i].Chinese+'&nbsp;&nbsp;&nbsp;&nbsp;'+allStudent[i].Math+'&nbsp;&nbsp;&nbsp;'+allStudent[i].Synthesize+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allStudent[i].all;
        document.getElementById("grades").innerHTML+='<br>';
    }
}
function sortAll() {
    var temp;
    document.getElementById("grades").innerHTML="";
    for(var i=0;i<num;i++)
    {
        for(var k=0;k<i;k++)
        {
            if(Number(allStudent[i].all)>Number(allStudent[k].all))
            {
                temp=allStudent[i];
                allStudent[i]=allStudent[k];
                allStudent[k]=temp;
            }
        }
    }
    for(i=0;i<num;i++)
    {
        document.getElementById("grades").innerHTML+=" "+allStudent[i].Name+'&nbsp;&nbsp;&nbsp;'+allStudent[i].Class+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allStudent[i].Chinese+'&nbsp;&nbsp;&nbsp;&nbsp;'+allStudent[i].Math+'&nbsp;&nbsp;&nbsp;'+allStudent[i].Synthesize+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+allStudent[i].all;
        document.getElementById("grades").innerHTML+='<br>';
    }
}