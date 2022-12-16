class Researcher {
    doResearch() :void {}
}

class Student {
    doExcercise(): void {}
}

class Audience implements Student, Researcher {
    doExcercise = (): void => { console.log ( 'Audience doExcecise ' ) }
    doResearch = () :void => { console.log ( 'Audience doResearch ' ) }
}

export { Researcher, Student, Audience }