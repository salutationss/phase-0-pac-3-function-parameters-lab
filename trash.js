function introductionWithLanguage(name, language){
    console.log(`Hi, my name is ${name}, and I am learning to program in ${language}.`)

}
introductionWithLanguage.string('Aki' , 'Ember.js')
introductionWithLanguage.string('Samip' , 'React')



function introductionWithLanguageOptional(name , language = "JavaScript"){
   console.log(`Hi, my name is ${name}, and I am learning to program in ${language}`)
}

introductionWithLanguageOptional.string('Gracie')

function introductionWithLanguageOptional(name = "Gracie" , language = "Python"){
    console.log(`Hi, my name is ${name}, and I am learning to program in ${language}`)
}

introductionWithLanguageOptional.string('Gracie' , 'Python')