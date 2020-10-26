---
title: "OHIF Prediction Extension"
date: 2018-11-18T12:33:46+10:00
featured: true
weight: 2
layout: product
---

This project is an OHIF extension that can be used with the Core OHIF Platform,
either at runtime, or as an ES6 dependency, to create a medical image viewing
applications that can be used with the APIs for the prediction outcome.

## Features

- Ability to easily add a prediction API to the OHIF viewer
- High customarily due to the use of API and few configurations
- Support multiple models with separate API end points
- Support a feature to show 'Bounding Boxes' from prediction API
- Support report feature so that the user can share ta diagnosis report

## Installation

You can download this repository as a zip and unzip in the development environment.
Then the this *'dicom-model-prediction'* folder to extensions folder inside the OHIF viewer
repository. Then you can add the extension to the viewer by adding it to the default extentions
list as followed.

> // Viewers/platform/viewer/src/index.js
>
> import OHIFDicomModelPredictionExtension from '../../../extensions/dicom-model-prediction';

As showed before you can import the extension to the index file.
Then the in the *'appProps'* need to be changed order to install the extension successfully.
Following code snippet is for demonstration purpose only. This would not until extension has been configured.
Please follow next section for full configuration guide. 

```javascript
const appProps = {
  config,
  defaultExtensions: [
    OHIFVTKExtension,
    OHIFDicomHtmlExtension,
    OHIFDicomMicroscopyExtension,
    OHIFDicomPDFExtension,
    OHIFDicomSegmentationExtension,
    OHIFDicomRtExtension,
    OHIFDicomTagBrowserExtension,
    OHIFDicomModelPredictionExtension
  ]
};
```

*Note: This extension will be available in the NPM packages in near future* 

## Configuration

Extension has to configure to use by the user. Models have to be named and this does require a 
through configuration to use it for full potential. Following is a sample fully configured extension.
Extension accepts a JSON format configuration.

```javascript
const appProps = {
  config,
  defaultExtensions: [
    OHIFVTKExtension,
    OHIFDicomHtmlExtension,
    OHIFDicomMicroscopyExtension,
    OHIFDicomPDFExtension,
    OHIFDicomSegmentationExtension,
    OHIFDicomRtExtension,
    OHIFDicomTagBrowserExtension,
    [
      OHIFDicomModelPredictionExtension,
      {
        options: {
          mailTo: 'hello@gmail.com',
        },
        modelsDetails: [
          {
            id: '1',
            name: 'Bone Prediction',
            predictionApi: 'http://127.0.0.1:5000/prediction',
            infoApi: 'https://testapi.io/api/randika/pacs/bone',
          },
          {
            id: '2',
            name: 'Lung Cancer Prediction',
            predictionApi: 'http://127.0.0.1:5000/prediction',
            infoApi: 'https://testapi.io/api/randika/pacs/lung_cancer',
          },
          {
            id: '3',
            name: 'Pneumonia Prediction',
            predictionApi: 'http://127.0.0.1:5000/prediction',
            infoApi: 'https://testapi.io/api/randika/pacs/pneumonia',
          },
        ],
      },
    ],
  ],
};

```

### Model Details

This is the main configuration section of the extension thus this section is very crucial for
correct implementation of the Viewer. Developer should set an array of models the application needs
as JSON objects. Should be using *String* type for all of the values. 

#### ID attribute

This attribute is a essential attribute inside the JSON object. This works as key so that extension can
uniquely identify each model individually. Thus this id need to be unique. Otherwise extension would get confused
about the selected extension.

#### Name attribute

This attribute is the one show up in the selection box that the user can changes. As for example *Bone prediction* 
will show up as the first value in the selection box.

#### Info API attribute

After user selected box details about the selected model show up underneath the selection box as per first screenshot. 
These details should be provided by an API. This attribute works as endpoint for that API. There quite a few attributes that
the developer can show using this API. This list include model name, modality, version of the model and etc. 
Following example show all of the attribute available and how should the API should return the desired data.  

> // How extension call the info API endpoint. Sending the model id as query parameter.
>
> // GET info API + model_id 
> // Example: GET  'https://testapi.io/api/randika/pacs/pneumonia?model_id=1'

```json
// How the data should return to the extension

{
    "data": {
          "name": "name",
          "modality": "modality",
          "organ": "organ",
          "task": "task",
          "data_description": "data_description",
          "model_description": "model_description",
          "additional_info": "additional_info",
          "model_performance": "model_performance",
          "website": "website",
          "citation": "citation",
          "version": "version"
    }
}
```

Extension except the response body to contain data object. Then inside that data object models details can be
send as shown by the code snipped above. This will get rendered in the model selection section. *'data'* attribute inside
the response is compulsory.

#### Prediction API attribute 

Most import attribute inside the configuration as this been used to get the prediction from the API.
After user has selected the model that user want to get prediction for the medical image and click on the prediction 
button this API will be called. This API call include image, modelId, columns and rows of the image viewport. 

> // How extension call the prediction API endpoint.
> 
> // POST prediction API 
> // Example: POST  'http://127.0.0.1:5000/prediction'
> 
> // This request include following data as form data
>  
> // image: viewport of the dicom image
> // modelId: Id of the selected model
> // rows: height of the viewport image
> // columns: width of the viewport image

After this request send to server of the API it does the necessary processing and should return 
the desired outcome. As the outcome may change from the model to model API return multiple values and those
values will be showed in the result section. Below code snipped shows the example of a predication API result.

```json
// This is a template for how the predection API should retrun the data

{
  "data": {
    "attributes": [{
       "title": "Prediction",
       "description": "Abnormal"
      },
      {
        "title": "Probability",
        "description": "94.5"
      },
      {
         "title": "Operation",
         "description": "Operation was successful"
      }
    ] 
  }
}
``` 

As shown above API can send any attribute and it will show up on the results section and the 
report sections. Inside the data object *'attributes'* array can spectiy multiple object that need to 
be shown. Those object should have a *'title*  and a *'description* fields. 
*'data'* and *'attributes'* attributes inside the response is compulsory.

##### Bounding Boxes Support

Bounding boxes are creating a box over a specified area of the image. This could be potentially be used as show the user
there is something important in this are of the image as shown in the second screenshot. This extension does support that with multiple
bounding boxes for same image as well.

To get this to working prediction API should return sections array object inside data object of the response. Individual section must contain
*'start'* and *'end'* attributes which them selves need to be containing *'x'* and *'y'* conditions for the bounding box. Following code snippet 
show the full response which does contains sections attribute. 

```json
// This is a template for how the predection API should retrun the data

{
  "data": {
    "attributes": [{
       "title": "Prediction",
       "description": "Abnormal"
      },
      {
        "title": "Probability",
        "description": "94.5"
      },
      {
         "title": "Operation",
         "description": "Operation was successful"
      }
    ],
    "sections": [{
        "start" : {
          "x": 100,
          "y": 100
        },
        "end": {
          "x": 200,
          "y": 200
        }
      }
    ] 
  }
}
``` 

Above response will draw a bounding box in the image of the viewer. This drawing can be also removed by the user.
As above attributes this sections also could have multiple object thus creating multiple bounding boxes. *'x'* and *'y*
indicate pixel position of the viewport image. *'data'* and *'sections'* attributes inside the response is compulsory.

*Note: As the extension provide rows and columns in the request these 'x' and 'y' pixel attributes should be coming from resized image.
Essentially image should be resized before calculating the pixels for bounding box.*

## License

@ohif/extension-dicom-model-prediction is released under the [MIT License](https://opensource.org/licenses/MIT).

## Developer

[K.B.R. Perera](https://github.com/randikabanura) <br/>
IT17134286 <br/>
[randika.banura@gamil.com](mailto:randika.banura@gamil.com) <br/>
Sri Lanka Institute of Information Technology (SLIIT)