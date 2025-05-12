
function myFun(selectid) {
    if (selectid.style.display === "inline" || selectid.style.display === "block") {
        selectid.style.display = "none";
    } else {
        selectid.style.display = "block";
    }
}
//https://mocki.io/v1/4e825a3a-5d3d-4ec0-bdc5-c1967dffc7c0
const Api = "https://mocki.io/v1/6012f726-82b1-4541-90b9-f8afe2ee3910"
fetch(Api).then(
    response => {
        if (!response.ok)
            throw new Error("Fetch Error");
        return response.json();
    }
)
    .then(data => {
        document.addEventListener('DOMContentLoaded', function () {
            console.log(data);
            console.log(data[0]["body"]["Properties"][0])
            const features = data[0]["body"]["Featres"];
            for (let f = 0; f < features.length; f++) {
                if (f == 0) {

                    document.getElementById("feature1").innerText = features[f];

                }
                else if (f == 1) {
                    document.getElementById("feature2").innerText = features[f];
                }
                else if (f == 2) {
                    document.getElementById("feature3").innerText = features[f];
                }
            }
            const Highlights = data[0]["body"]["Highlights"]
            for (let h = 0; h < Highlights.length; h++) {
                if (h == 0) {
                    document.getElementById("highlight1").innerText = Highlights[h];
                }
                else {
                    document.getElementById("highlight2").innerText = Highlights[h];
                }
            }
            const Transportations = data[0]["body"]["Transportation"];
            for (let t = 0; t < Transportations.length; t++) {
                if (t == 0) {
                    document.getElementById("transportation_opt1").innerText = Transportations[t];
                }
                else {
                    document.getElementById("transportation_opt2").innerText = Transportations[t];

                }
            }
            const OfficeSpaceA = data[0]["body"]["Properties"][0];

            const OfficeSpaceB = data[0]["body"]["Properties"][1];
            //     //console.log(OfficeSpaceA["office Space A"]["Ammount"])
            //    // console.log(OfficeSpaceA.length);
            for (let i = 0; i < OfficeSpaceA["office Space A"]["Month"].length; i++) {
                if (i == 0) {
                    document.getElementById("OfficeA_month1").innerText = OfficeSpaceA["office Space A"]["Month"][0];
                    document.getElementById("OfficeA_month1_Amount1").innerText = OfficeSpaceA["office Space A"]["Ammount"][0];

                }
                else if (i == 1) {
                    document.getElementById("OfficeA_month2").innerText = OfficeSpaceA["office Space A"]["Month"][1]
                    document.getElementById("OfficeA_month2_Amount2").innerText = OfficeSpaceA["office Space A"]["Ammount"][1]

                }
            }
            for (let i = 0; i < OfficeSpaceB["office Space B"]["Month"].length; i++) {
                if (i == 0) {
                    document.getElementById("OfficeB_month1").innerText = OfficeSpaceB["office Space B"]["Month"][0];
                    document.getElementById("OfficeB_month1_Amount1").innerText = OfficeSpaceB["office Space B"]["Ammount"][0];

                }
                else if (i == 1) {
                    document.getElementById("OfficeB_month2").innerText = OfficeSpaceB["office Space B"]["Month"][1];
                    document.getElementById("OfficeB_month2_Amount2").innerText = OfficeSpaceB["office Space B"]["Ammount"][1];

                }
            }
        })

    }
    )