// these are the essentital package is must to run this script
// npm init -y
// npm install minimist
// npm install axios
// npm install excel4node
// npm install pdf-lib
// npm intsall jsdom

// node Project.js --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results --dataDir=worldcup --excel=Worldcup.csv 

// let require all package one by one
let minimist = require('minimist');
let axios = require('axios'); // for downloading the page
let jsdom = require('jsdom'); // for reading the page
let excel4node = require('excel4node'); // making excel file
let pdf = require('pdf-lib'); // used for making pdfs
let fs = require('fs');
let path = require('path'); // already have in node but must having require it / used for files system
let args = minimist(process.argv);
console.log(args.source);// (site) this is that which passesd with run script 
console.log(args.excel);// (excel file csv)
console.log(args.dataDir);// (folder name = dataDir)

let responsekapromise =axios.get(args.source);
responsekapromise.then(function(response){
    let html = response.data;
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;
    let matchScoreDivs = document.querySelectorAll("div.ds-p-4 > div.ds-flex");
    let matches =[];
    
    for(let i=0;i<matchScoreDivs.length;i++){
        let match = {
            t1:"",
            t2:"",
            t1s:"",
            t2s:"",
            result:""
        };
        let resultspan = matchScoreDivs[i].querySelector("p.ds-truncate > span");
        match.result = resultspan.textContent;
        let teamsname = matchScoreDivs[i].querySelectorAll("div.ds-flex > p.ds-capitalize");
        match.t1 = teamsname[0].textContent;
        match.t2 = teamsname[1].textContent;
        
        let scores = matchScoreDivs[i].querySelectorAll("div.ds-flex.ds-flex-col.ds-mt-2.ds-mb-2 >div.ci-team-score > div.ds-text-typo-title > strong");
        if(scores[0] == null){
            match.t1s = "-";
        }else{
            match.t1s = scores[0].textContent;
        }
        if(scores[1] == null){
            match.t2s = "-";
        }else{
            match.t2s = scores[1].textContent;
        }
        matches.push(match);
    };
    
    // json file
    let matcheskajson = JSON.stringify(matches);
    fs.writeFileSync("matches.json",matcheskajson,"utf-8");

    let teams = [];
    //push team not already their
    for(let i=0;i<matches.length;i++){
        pushteam(teams,matches[i].t1);
    }
    
    // push teams appropriate with teams like vs
    for(let i=0;i<matches.length;i++){
        pushteamap(teams,matches[i].t1,matches[i].t2,matches[i].t1s,matches[i].t2s,matches[i].result);
        pushteamap(teams,matches[i].t2,matches[i].t1,matches[i].t2s,matches[i].t1s,matches[i].result);

    }
    let teamkajson = JSON.stringify(teams);
    fs.writeFileSync("teams.json",teamkajson,'utf-8');

    prepareExcel(teams,args.excel);
    preparefolders(teams,args.dataDir);

})  

function pushteam(teams,teamname){
    let tidx =-1;
    for(let j=0;j<teams.length;j++){
        if(teams[j].name == teamname){
            tidx =j;
        }
    }
    if(tidx == -1){
        let t ={
            name:teamname,
            matches:[]
        }
        teams.push(t);
    }
}

function pushteamap(teams,ht,vt,ss,os,r){
    let tid = -1;
    for(let j=0;j<teams.length;j++){
        if(teams[j].name == ht){
            tid = j;
        }
    }
    let te = teams[tid];
    let k ={
        vs: vt,
        selfscore:ss,
        oppscore:os,
        result:r
    }
    te.matches.push(k);
}

function prepareExcel(teams,excelfilename){
    let wb = new excel4node.Workbook();

    for(let i=0;i<teams.length;i++){
        let tn = teams[i].name;
        let tsheet = wb.addWorksheet(tn);

        tsheet.cell(1,1).string("Vs");
        tsheet.cell(1,2).string("Self Score");
        tsheet.cell(1,3).string("Opp Score");
        tsheet.cell(1,4).string("Result");
        for(let j =0;j<teams[i].matches.length;j++){
            tsheet.cell(2+j,1).string(teams[i].matches[j].vs);
            tsheet.cell(2+j,2).string(teams[i].matches[j].selfscore);
            tsheet.cell(2+j,3).string(teams[i].matches[j].oppscore);
            tsheet.cell(2+j,4).string(teams[i].matches[j].result);
        }
    }
    wb.write('excelfilname.xls')
}

function preparefolders(teams,dataDir){
   
    if(fs.existsSync(dataDir)== true){
        fs.rmSync(dataDir,{ recursive :true });
    }fs.mkdirSync(dataDir);
    for(let i=0;i<teams.length;i++){
        let teamfoldername = path.join(dataDir,teams[i].name);
        if(fs.existsSync(teamfoldername)==false){
            fs.mkdirSync(teamfoldername);
        }
        for(let j =0;j<teams[i].matches.length;j++){
            let match =teams[i].matches[j];
            createscorecardpdf(teamfoldername,teams[i].name,match); 
            
        }
    }
}

function createscorecardpdf(teamfoldername,hometeam,match){
    let matchfilename = path.join(teamfoldername,match.vs)
    let tempaltefilebyte = fs.readFileSync("template.pdf");
    let pdfdocpromise = pdf.PDFDocument.load(tempaltefilebyte);
    pdfdocpromise.then(function(pdfdoc){
        let page = pdfdoc.getPage(0);
        page.drawText(hometeam,{
            x: 320,
            y:660,
            size:11
        });
        page.drawText(match.vs,{
            x: 320,
            y:635,
            size:11
        });
        page.drawText(match.selfscore,{
            x: 320,
            y:615,
            size:11
        });
        page.drawText(match.oppscore,{
            x: 320,
            y:590,
            size:11
        });
        page.drawText(match.result,{
            x: 320,
            y:565,
            size:11
        });
    let changedbytepromise = pdfdoc.save();
    changedbytepromise.then(function(chgebyte){
        if(fs.existsSync(matchfilename + ".pdf")== true){
            fs.writeFileSync(matchfilename + "1.pdf",chgebyte)
        }else{
            fs.writeFileSync(matchfilename + ".pdf",chgebyte)
        }
        
    })

    })
}