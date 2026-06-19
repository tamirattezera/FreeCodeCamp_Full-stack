# Test Cases

## Valid Input

Input:

{
containerId:55,
destination:"Carmel",
weight:400,
unit:"lb",
hazmat:false
}

Expected:

Validation success: 55

Total weight: 180 kg


## Empty Object

Input:

{}

Expected:

{
containerId:"Missing",
destination:"Missing",
weight:"Missing",
unit:"Missing",
hazmat:"Missing"
}


## Invalid Values

Input:

{
containerId:-88,
destination:" ",
weight:NaN,
unit:"pounds",
hazmat:"no"
}

Expected:

{
containerId:"Invalid",
destination:"Invalid",
weight:"Invalid",
unit:"Invalid",
hazmat:"Invalid"
}


## Missing Properties

Input:

{
destination:"Watsonville",
hazmat:true
}

Expected:

{
containerId:"Missing",
weight:"Missing",
unit:"Missing"
}
