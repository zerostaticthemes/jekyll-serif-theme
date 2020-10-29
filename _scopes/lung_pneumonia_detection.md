---
title: "Pneumonia Detection"
date: 2018-11-18T12:33:46+10:00
featured: true
weight: 4
layout: scope
---

<p style='text-align: justify;'>
This is the thesis in the part of Pneumonia detection of the research project including research problem, literature review ,objectives and research gap.
</p>

<p style='text-align: justify;'>
Radiology is a one of the most important area in western medicine practice. It has been used
to diagnose very important health issues and diseases. Generally, the disease can be
diagnosed from chest X-ray images by an expert radiologist. Also early diagnosis is an
important factor for a successful treatment process. But the diagnoses can be subjective and
the process of detection by reading X-ray images can be time consuming for some reasons
such as the appearance of disease which can be unclear in chest X-ray images or can be
confused with other diseases. Therefore, computer-aided diagnosis systems are needed to
guide the radiologist. In this study, we expect to develop a web viewer for detecting the
presence of pneumonia in the lungs. Convolutional neural network model is constructed
using deep learning approaches and extract features from a given chest X-ray image and
classify and classify it to determine if a person is infected with pneumonia. Furthermore
several data augmentation algorithms are used to solve the problem of small dataset,
overfitting problems and increase the efficiency of the CNN model. As a result of our
application, it can guarantee timely access to treatment and save much needed time and
money for those already experiencing radiologist’s poverty by increasing the accuracy and
the efficiency of the radiology. These results are promising for further development of xray-based diagnosis using the deep learning approach. 
</p>

## Literature Survey

<p style='text-align: justify;'>
Though there are some literature available for detecting the presence of pneumonia
form X-ray images, but less number of researchers has been conducted with the
combination of the above-mentioned area.
In 2017, Antin et al. used a DenseNet-121 layer with utilizing transfer leaning
method for detecting pneumonia . For this project, They have focused on binary
classification and used t-SNE (TDistributed Stochastic Neighbor Embedding) to
classify a particular X-Ray as having pneumonia or not. There are multiple images
from many of the patients, and in order to ensure that models do not see data from
the same patient across training and test, they have separated the data by patient
before splitting into training, validation, and test sets and have begun with a brief
exploration of the data using unsupervised techniques. For the sake of data
exploration, 500 random samples have been explored due to resource constraints.
They have achieved 0.60% area under the curve (AUC) value.
In 2017, Rajpurkar proposed a 121-layer convolutional neural network based on
DenseNet and named as CheXNet. They trained their network with 10.000
frontal view chest X-ray images with 14 different diseases. They have assessed the
performance of their network with four expert radiologists in f1 score metric which is
the harmonic average of the precision and recall metrics. CheXNet achieved a f1
score of 0.435.
In 2017, Abhishek Sharma, , Daniel Rajuetal, Sutapa Ranjan presented a approach
for detecting the presence of pneumonia clouds in chest X-rays (CXR) by using only
Image processing techniques. For this, they have worked on 40 analog chest
CXRs pertaining to Normal and Pneumonia infected patients. Indigenous algorithms
have been deployed for cropping and for extraction of the lung region from the
images. To detect pneumonia clouds they have used Otsu thresholding which will
segregate the healthy part of lung from the pneumonia infected cloudy regions.
</p>

## Rsearch Gap

<p style='text-align: justify;'>
Several types of researches have been done for the past few years about the systems
that can detect presence of pneumonia in the lungs. When considering the previous
researches, we found certain limitations and future works. Therefore, we propose a
system in order to overcome above-mentioned limitations and come up with a new
product with improved features.</p>

#### Solving the problem of small dataset

<p style='text-align: justify;'>
Unlike other deep learning classification tasks with sufficient image repository,
specially it is difficult to obtain a large amount of pneumonia classification tasks ;
therefore, several data augmentation algorithms are deployed to improve the
validation and classification accuracy. But in the few of previous researches., they
have developed a algorithms to solve the problem of small dataset.
</P>

#### Access through the internet.

<p style='text-align: justify;'>

In the previous researches, they have developed only a model to classify and detect
the presence of pneumonia in the human Body, but We implement the product with a
web viewer for classifying tasks. Furthermore, the System is developed to store
patient’s details and diagnosis in a PACS server. So that the Physician and patient
can view information about presence of the pneumonia efficiently in anywhere .It
helps to increase the access area to medical imaging expertise in parts of the world
where access to skilled radiologists is limited.

</p>

#### Efficiency.

Several data augmentation algorithms are deployed to improve the classification
accuracy. In the Some of the previous systems addressed these feature. In our system
this is done in the preprocessing and data augmentation stage by doing such as
decreasing image size.

#### Overfitting Problem.

<p style='text-align: justify;'>

Several data augmentation methods to artificially increase the size and quality of the
dataset. This process helps in solving overfitting problems. But the most of previous
researches haven’t addressed about this problem.

</p>

## Research Problem

<p style='text-align: justify;'>
X-ray plays an important role in the human life. because X-Rays can be widely used
for diagnosing so many abnormalities in the human body. Cysts Tumors, Asthma
Cancers, Heart failure, Fractures, Lung diseases and conditions are some of them.
but, At global level according to the latest estimates from the WHO .Each year in
the United States, more than 250,000 people have to seek care in a hospital due to
pneumonia, unfortunately, about 50,000 people die from the disease each year in the
United States Over 150 million people get infected with pneumonia on an annual
basis especially children under 5 years old. According to these information a
huge number of people are suffering and dead in pneumonia in the lungs. Vaccines
and appropriate treatment (like antibiotics and antivirals) can prevent many of these
deaths, but the reason for large amount of deaths that in some regions, like in
Africa’s 57 nations, a gap of 2.3 million doctors and nurses exists . The main
reason for the poverty of the radiologists is that the process of pneumonia detection
reading a X-ray can be time consuming for some reasons such as the appearance of
disease which can be unclear in chest X-ray images and can be confused with other
diseases.

</p>

• In computer-aided systems , there are no web viewers which are classifying and
detecting the pneumonia in the lungs.


• Patient can meet the physician only at the time duration of the appointments and 
there is a no possible way to assess it at home to physician and radiologist, if there
is a immediate situation.



• The working area of the radiologist has limited due to time consuming things.


• If the radiologist has to leave from the hospital , then there is a no way to diagnose
for a very sick person.




## Research Objectives

### Main Objectives
<p style='text-align: justify;'>
The main objectives of the proposed system are to support to radiologists for timely
accessing to treatment and saving much needed time and money in order to already
experiencing radiologist’s poverty by producing a web viewer to detect presence of
pneumonia using deep learning approaches.

</p>

### Specific Objectives
#### Increasing the accuracy of the reading a X-ray to detect the presence of pneumonia.
 

*   Several data augmentation methods are deployed to artificially increase the
size and quality of the dataset. This process helps in enhances the model’s
generalization ability during training. the process of pneumonia detection by
reading X-ray images can be time consuming and less accurate. The reason is
that several other medical conditions i.e. lung cancer, excess fluid etc. can
also show similar opacities in images. Therefore, accurate reading of images
is highly desirable


####  Increasing the efficiency of the radiologist
 

 *  Unlike other methods that rely solely on transfer learning approaches or
traditional handcrafted techniques to achieve a remarkable classification
performance, a convolutional neural network model is constructed from
scratch to extract features from a given chest X-ray image and classify it to
determine if a person is infected with pneumonia. These approaches save the
time of radiologist. 

####  Allow access to radiologist work remotely

 *  This systen allows to radiologist to detect and send the report to physician remotely.



## Methodology


##  Technologies Used

### CNN Model to detect pneumonia: Python
 <p style='text-align: justify;'>

Python was used as the main programming language mainly due to its extensive
selection of libraries and frameworks focusing on machine learning , the simple syntax
helps to collaborate with the rest of the team members, concise readable code,
extensive support from high quality documentation and active community of
developers that offer assistance. CNN was constructed using python and deployed
using python flask in the backend. Few main libraries were used as shown in figure 3
to implement and it’s explained in next sub section

</p>

* Keras

> <p style='text-align: justify;'>
Keras is a powerful and easy-to-use free open source Python library for developing and
evaluating deep learning models. It wraps the efficient numerical computation libraries
Theano and TensorFlow and allowed us to define and train neural network models in
just a few lines of code. So that keras was used us to train the CNN and preprocess
the image dataset
> </p>

* OpenCv

> <p style='text-align: justify;'>
OpenCv was used to resize images for a same size as shown in figure 6, as training
datasets,testind and inserting image in the real world can be different sizes.
> </p>

###  Server-Orthanc

<p style='text-align: justify;'>

Orthanc is a dicom server which can be stored dicom images and meta data
with patient, physician details. We used it for storing dicom images and
metadata.
</p>

###   Preduction API-Python Flask
<p style='text-align: justify;'>
Flask is a lightweight WSGI web application framework. It is designed to make getting
started quick and easy, with the ability to scale up to complex applications. Also there
are many extensions provided by the community that make adding new functionality
easy.So that python flask was used to return the details of the result to the frontend.
</p>

###  DICOM Viewer with AI prediction -react JS
<p style='text-align: justify;'>
React js was selected to implement the front end as it is Easy to Learn ,Use and  creating Dynamic Web Applications Becomes Easier.And the react JS has  reusable components.So that it makes more easier to extend the application with new features for future developments.So that react JS was used to implement the viewer with 
AI prediction feature for X-ray Images
</p>        

