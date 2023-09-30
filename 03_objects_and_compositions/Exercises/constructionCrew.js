function constructionCrew(obj) {

    let objToDisplay = obj;

    if (obj.dizziness) {
        let weight = obj.weight;
        let experience = obj.experience;

        objToDisplay.levelOfHydrated += weight * 0.1 * experience;
        objToDisplay.dizziness = false;
    }

    return objToDisplay;
}

constructionCrew(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
);
constructionCrew(
    {
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true
    }
);
constructionCrew(
    {
        weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false
    }
);