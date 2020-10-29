---
title: "Bone Abnormality Detection"
date: 2018-11-18T12:33:46+10:00
featured: true
weight: 2
layout: scope
---

<p style='text-align: justify;'>
This is the thesis in the part of Bone Abnormality detection of the research project including research problem, literature review, objectives and research gap.
</p>

<p style="text-align: justify">
Radiology is the field of using medical imaging for the purpose of diagnosing and treating the diseases. Radiologists are medical doctors that specialized in using medical imaging to diagnose and treatment of such diseases. Using medical imaging a doctor can see beyond a patient's appearance and get to the root cause of the problem. These medical imaging techniques include the X-ray,  Ultrasound scanner, computed tomography (CT), magnetic resonance imaging (MRI),  positron emission tomography (PET) and others which are more of a specific disease based techniques. Using these technologies a radiologist can come to a conclusion whether the patient does have certain diseases or not and if the patient does have an illness,  what is the appropriate treatment plan to treat the patient. Radiology does have a major role in disease management as the early detection is important and the field does have capability to detect problems with a fleet of new and improved technologies under the wing. For many diseases, general physician or emergency care physicians do rely on the results of radiology tests and the expert opinion of the radiologist. 
	X-ray is the most famous and mostly used technique for radiology medical images. Because of that there are millions of X-rays photographed every single day. November 8th 1895, physics professor named Wilhelm Röntgen who from german descent accidentally discovered the X-rays and published his findings in December 1895. He discovered that calcium in the human bones are good at absorbing the X-rays which could be used to get skeleton based images. Ever since the discovery, medical use of the X-rays has been popularized and the first recorded case happened only after 1 month later he published the paper regarding the X-rays. His discovery influenced the world ever since and made life saving discoveries for patients all around the world. 
	As X-ray is the building block of the field of radiology and still one of the most used methods, I wanted to come up with a system that takes X-rays into account. That should be beneficial for the places that do not have the cutting edge technologies and hardware to rely on. Also the detection part of the system does make it easier for the general physician or the radiologist to pay attention to the important medical images which could potentially have problems rather than dividing same time to every image. This means there are less chances of missed diagnosis or delayed diagnosis, which could potentially save lives.
</p>

## Literature Review

<p style='text-align: justify;'>
Convolutional Neural networks (CNN) has been a hot topic in deep learning and image classification and recognition studies and due to that it has become a widely used classification technique for medical image analysis. CNN techniques have begun widely used by medical research because it has the ability to handle large, unstructured data. 
   	CNNs started to trend around 2012 when AlexNet was first introduced with an 8 layer neural network. Also these are more efficient than the machine learning algorithms and when it comes to large datasets it has been more efficient than other machine learning approaches. To name a few this has been used for the Digital mammographic tumor classification [1], Brain Tumor Segmentation using MRI images [2], Skeletal bone age assessments to help the diagnosis of endocrine and metabolic disorders in child development [3]. Most of the papers have been compared to other approaches to the CNN model and most of the approaches failed to reach the accuracy that CNN model have been able to achieve. In the Chest Diseases Detection using X-rays [4] they used the competitive neural network (CpNN) and backpropagation neural network (BPNN) carried out along with the CNN. They also found that CNN would give a higher accuracy rate than other models on the larger datasets and when it has more and more iterations through the data. That would mean even though training time will be higher than other networks it is capable of giving a better model in a reasonable time scale.
   	There are quite a few ways to go with image classification and feature detections on the X-rays without using CNN. To name a few there are Artificial Neural Networks (ANN), Support Vector Machines (SVM), Bayesian Networks (BN). For using any of these techniques or any other technique actually based on the situation you are dealing with. It is not easy to decide whether a technique would be better for the situation and would give most accuracy. It would depend on number or scenario related factors.
   	In Bayesian image classification, it uses a feature set and label set for the learning of the classification. Also the classification is dependent on probability of the features of said image, corresponding to the probabilistic label from the training data. Classification would consider a feature as non-dependent from the other features. Using this classification algorithm for medical images need to preprocess the data carefully, then feature extractions which will get the reduced dimensional data into the classification algorithm [5]. As proposed by the paper this algorithm mostly works well with the problems that include multiple classes. It is not usually for the medical image classification excluding some extra ordinary scenarios.
   	Support vector machines can be used for the medical images that can be classified into two classes. For example if an X-ray can be classified as normal and abnormal classes. I could perform classification of the classes by finding the hyper-plane that differentiates the two classes very well. This classification can be linear or nonlinear. Recently this was used to classify Diabetes Mellitus[6], Lung Nodule Detection from CT scan images[7-8] and many more. Papers get better results using SVM classification technique rather than linear classification types. Using SVM as the classification most of the models were able to reach an accuracy of around 80%. 
   	Artificial neural networks (ANN) another deep learning algorithm that also could be used for the image classification tasks. But as image size is increasing, the number of trainable parameters increases drastically. That would mean if the size of the image is 224*224, then the number of trainable parameters would be huge even when the model comes to the first hidden layer. That many neurons would be very hard to handle and train. 
   	Regardless of the time variable that it has to train under, CNN is the one of the best image classification algorithm todate. It also is able to segmentation and analyze images with ease[9]. Even best algorithms have some downsides So that CNN is higher relaying on the system resources, which would consume large computational time for the system resulting in an overhead [10]. I can overcome these computational issues with some clever optimization methods such as memory access optimization and near data processing [11-12]. 
   	There are few bone disorder detection papers [26] specified in lower extremity radiographs. As research is focused on the lower body parts, areas the paper covers are the foot, hip, ankle and the knee of the human body. Their dataset includes more than 90000 of images collected from more than 13000 patients. They build their model using three separate CNN model architectures: DenseNet161, ResNet101 and ResNet50. As our bone abnormality detection focused on upper extremity X-ray images this is a good example of the type of research I are conducting. By their DenseNet CNN model they were able to achieve the AUC-ROC of 0.880 on the classification task. They concluded that a single CNN model could effectively and efficiently identify any abnormalities of X-ray radiographs of multiple body parts. In a paper[27] published in 2019 of the 5th International Conference on Advances in Electrical Engineering does use the same dataset I have been using for the research to create detection models using CNN architectures. They have approached the problem using VGG-19 and ResNet architectures to build models for using only 4 study types out of 7 study types. They also used a 5-fold cross-validation method to evaluate their developed models using above architectures. ANd the they have created an ensemble model combining the two resulting models from the VGG-19 architecture and ResNet architecture. I wanted to create an ensemble model using all of the study types, and with a higher percentage of accuracy.
   	Cloud computing is one of the most talked about topics nowadays as its potential is so high. Every industry that has an online presence for some reason would be able to use cloud computing to do their computational needs in a more efficient and cost effective way. Elimination of the cost to keep the servers, power supply, cooling equipment network engineers are some benefits that cloud computing brings on [13]. So there no is no surprise that cloud computational power would be a massive positive change for machine learning  and deep learning algorithms. Alibaba, AWS sagemaker, Google Cloud and Kaggle are some of the providers that provide computational needs for machine learning, deep learning, etc.
</p>

## Research Gap

<p style='text-align: justify;'>
As bone abnormalities are relatively rare when compared to lung cancers and pneumonia related diseases, research in the area is less than other medical imaging detection research due to that fact. Also there are a lot of problems with bone related medical imaging datasets available that are slowing down the essential research into the field. Thus making a large number of research gaps including in the topics of bone abnormality detection, bone cancer detection and bone tumor detection among others. Much of the available bone related medical image detection research does focus on the newer technologies of image capturing and this makes a research gap for X-ray image detection research as X-ray is the most used medical imaging technology to date. Also most of the research is outdated due that fact a lot of newer detection technologies came to mainstream scientific research in the last couple of years. Even though old detection techniques still have an application for some specific problems I could use the newest detection technologies such as CNN to close the gap created by introduction of these technologies. 
		Currently there is no research that consists of bone abnormality detection of X-rays for a web viewer because most of them are not to the standards. As for now there are only models that can identify the abnormalities of X-rays on most common diseases nevertheless  most of them are old and not reliably predicting results so that I can implement in a web application. Because of that I choose to build our own models for the prediction, using new and well established CNN architecture. I did use DenseNet169 that was proposed in 2016 for image classification of bone abnormality detection models. As for the DenseNet it is very well efficient than other models proposed previously to that. Different model types that I used did depend on the classification tasks that were in hand. So that I could gain the most optimized solution possible. I hope this research will contribute to the research doing in the field of medical procedures that uses deep learning as technology to diagnose the various diseases and would make most of reliable models using new technologies rather than getting hung up on old technologies for prediction tasks. 

</p>

## Research Problem

<p style='text-align: justify;'>
Currently there are no viable solutions for the web based medical images viewing systems that also run computer aided systems that can diagnose or identify potential problems with the medical images. Even though I mainly focused on the detection using X-ray images this technique can be improved and updated for other techniques such as MRIs and ultrasound images. Current situation is that most of the work is done by a radiologist or a physician for the diagnosis part of the procedure. Picture archiving and communication systems (PACS) are the systems that are currently in use in countries like Sri lanka. They only provide a way to view the medical images by the radiologist  and do not provide any helpful diagnosis prediction on behalf of the medical practitioner. And PACS solves the problem of having to manually transfer the medical images from the capturing device to the computer that has the viewing software. With the lack of human and technical resources it is vital to get most out of the resources available in hand. Due to this, there should be a mechanism for managing the available medical resources well so that every patient who does need the attention gets it whether they are in a city, town or rural village. 
Detection of bone abnormalities in humans using X-rays is the problem that I am focusing on. It is important because it is overlooked most of the time due to the rarity of a diagnosis event. Most of the time bone abnormalities detection has been diagnosed accidently. I could make every bone X-ray go through a model and automatically inform the radiologist if any irregularities were found about the X-ray. There are several ways for the detection of bone abnormalities such as SVM model and deep learning using CNN model. Most of the models give a relatively similar rate of a prediction of the abnormality. I have to incorporate these models with a view for the radiologist.
</p>

## Research Objective

### Main Objective

<p style='text-align: justify;'>
Objective is to create an image classification model that can identify the bone abnormalities by analyzing X-ray images using state of the art technologies including machine learning and deep learning. This will benefit towards providing health services to the part of the world which suffers from lack of technical resources and medical personnel to provide health services. According to a study on the disease on the world scale say that the bone related conditions affect more than 1.7 billion worldwide. And it also points out that bone released diseases accounted for the 2nd greatest cause of disabilities, and have the 4th greatest impact on the overall health of the world currently. Also X-ray is a widely used medical imaging technique so improving the ability to diagnose X-ray images is quite beneficial for a large part of the under developed or rural areas. Due to that the objective of diagnosing the bone abnormalities using X-ray images is a very important task. 
</p>

### Specific Objectives

#### Increase the model accuracy

> <p style='text-align: justify;'>Bone abnormalities detection does not have many research conducted on the topic. Even with the research done it is not very solid and most of them do not have reliable model accuracy. Hence I wanted to create a model that is more accurate, which could be used in the commercialized product. This would make commercially viable options that hospitals would have because this  product makes cost reduction for resources.</p>


#### Reduce Manual Work

> <p style='text-align: justify;'>Without a computer aided detection system, radiologists and physicians do have to go through every image that comes to the system and identify potential problems with the said medical images. If the detection algorithm can predict an image does have characteristics of any abnormality I can inform the radiologist so he or she can spend more time on that image rather than evaluating every single image. Radiologists’ time is a valuable resource that should be managed very efficiently.</p>

#### Connect Rural Places to National Health Infrastructure

> <p style='text-align: justify;'>One of the main advantages of the system is its ability to make remote diagnosis of medical  images. That gives the ability to connect to a system that is halfway around the world and make diagnosis to treatment plans. In a country where the health care system does not cover all the population this is a great opportunity to connect rural and under developed areas of the nation, to the national health services as well.</p>

#### Web Application

> <p style='text-align: justify;'>Create a web application that is able to see the X-ray radiographs that are detected by the models and view them in an interface that is made to view medical images. This is a major part of the research to have applications that could access through the internet which would make products more accessible. Web application makes it a much more attractive product and makes a good impression to potential buyers.</p>

#### Potential Commercialization of the Product

> <p style='text-align: justify;'>As most of the X-rays taken do not go through a proper diagnosis stage for bone abnormality detection. Leveraging this problem I could create a business model to commercialize the product using the automatic detection from images in a database. Thus making a cost effective but a potentially rewarding, model for bone abnormality detection which every single radiograph that gets into the database has to go through. If I could build a model that could be in a commercialized product is one of the sub objectives of creating the model.</p>

## Methodology

### CNN Model Architecture 

#### How CNN works?

> <p style='text-align: justify;'>
Image classification is the CNNs are most famous for. As computers can not analyze an image like a human it is a tricky to classify an image to one category or another. Due to computers being unable to compare a whole image to another image, it is very bad at image classification tasks using normal machine learning algorithms. As computers can only see one pixel at a time, comparative work does not result in good classification. 
CNN models do not compare pixel to pixel, but rather compare a piece of an image to another. These image pieces (array of pixels) are also known as features. CNN is trying to find the same features that match in roughly the same position in the comparing image. Every single feature is like a mini image with a limited number of pixels. When a new image has been given to the Convolutional neural network, it does not know where to start and how features will match. So CNN tries to match every feature to every position that is possible. By calculating a given possible pixel array to the features throughout the whole image, it acted as a filter. This is where the name of CNN comes from, which matches to make this filter called convolution. Math of the convolution is rather easy, to calculate the answer feature is map to patch of an image. Then simply multiply each and every pixel of the feature by the value of the corresponding pixel in the comparing image. Then add up those answers and divide the final answer by the total number of pixels in the feature. For the compilation of the process each of the possible pieces of the image does match up to the feature I am comparing the image too. Using this technique the computer can get an idea which places of the image have been matched higher relatively. This is only a process of one feature. CNN continues this process for each and every one of the features that it compares. This would result in filtered images set.  The process of comparing all of the features to the whole image is known as convolutional layer. Thus there can be layers added to the CNN model itself. This could be a reason why CNN does hog a lot of computational time relative to other machine and deep learning algorithms and architectures. 
> </p>

![Basic architecture of the Convolutional Neural Networks](/images/scopes/bone_abnormilities_detection/cnn-arcitecture.jpg "Basic architecture of the Convolutional Neural Networks")	
<p style='text-align: center; font-style: italic'>Basic architecture of the Convolutional Neural Networks</p>

> <p style='text-align: justify;'>
CNN does consist of layers called pooling layers. This is the process of making large images shrink and compress while preserving important bits of information. Pooling layer is a very important and powerful way of getting the information needed while using less computations. For this to work CNN does decide on a window size, which can be 2,3 or other value. This value represents the number of pixels on the side of a window, making it a square. When pooling CNN gets the maximum value of the pixel and preserves and takes that information to the next layer. Due to this large images can shirk to manageable size, while keeping the needed information for a classification intact. Features can then compare the reduced image, while saving a lot of computational time. This layer also solves the critical problem of computers being able to see only one bit of information at time using simple mathematics. 
CNN also consists of a small layer called ReLU which is also known as Rectified Linear Unit. Math of this layer is very easy. The only thing it does is whenever a negative number occurs it swaps it for a zero. This operation helps the evolution of the CNN models by keeping the values being stuck at near zero values or getting large values towards infinity. This is a small but an important layer for CNN. Also the output size of this layer is the same as the input while no negative numbers come through the output. 
Another layer of CNN is fully connected layer. What this does is categorize the image that needed categorization by using filtered images from above layers. Instead of treating the input as a two dimensional array, this treats the array values as a single list. Every single value gets a vote on what should be the categorization of the input image. Even though every value gets a vote, the vote doesn't count as a single vote rather expressed as weights. This means all of the votes do not decide the categorization of the input image. When an input has been submitted to the CNN model it does go through every layer until it reaches the fully connected layer at the end of the neural network. At the end an election of the categorization is held as mentioned above. The answer with the most weighted votes wins the election and is selected as the category of the image input. 
This is how a normal CNN layer does operate. But there still some unanswered questions are withstanding. Those are how CNN detects features and how the weights in the decision layer, named fully connected layer, is calculated. If these calculations had to be done by hand, that takes a lot of time, which is where the backpropagation technique comes in and does these complex calculations for us. To get the backpropagation to work I need a set of images that I know what category each image belongs to. Then the images are fed into untrained CNN one after another. Untrained CNN means I start the training on a random set of values for weights for the fully connected layer.  As mentioned above, every image will result in an election and a result. Then the CNN calculates the wrongness of the vote which gives the error. This value can tell how good the weights are in the fully connected layer. Then the features and weights would be adjusted accordingly, to reduce the error. The weight value adjusted little by little after every decision of the fully connected layer new error rate is being calculated. Looking for the set of weights that makes the error rate to minimum. After doing this for every feature in every convolution layer and lastly for weights in every fully connected layer, the best answer that reduces the error rate would be the new best weights that works little better than previous weights. This process is repeated for every image that was previously labeled by external resources. This is why the CNN architecture is known to have data hungry behavior. Small number of images could not bring down the error rate by a substantial amount. Even some problems do need more images than others to get to the best weights. Also this step is known to take high computational time. 
Even though most of the things that need CNNs are intelligent enough, they figure out automatically by themselves, there are few other things that a developer has to figure out and specify. For example how many features a convolution layer should have, how many pixels should be in each feature, what is the window size and etc. Also some other types of questions need to be answered as well. How many layers should a CNN have is one of the main questions. Larger number of layers does open up new research areas and possibilities. Another interesting idea is how the layers are going to be stacked together. CNN generates a large number of path ways to take and explore, which is a very important characteristic every new deep learning technology should have. 
> </p>

### What is DenseNet Architecture?

![Basic architecture of the Densely Connected Convolutional Networks](/images/scopes/bone_abnormilities_detection/densenet-arcitecture.png "Basic architecture of the Densely Connected Convolutional Networks")
<p style='text-align: center; font-style: italic'>Basic architecture of the Densely Connected Convolutional Networks</p>

> <p style='text-align: justify;'>
Densest Neural Networks otherwise known as Densely Connected Neural Networks is a state of the art technology that is newly introduced to deep learning  for visual object recognition and image classification fields and studies. As images classification and other deep learning tasks are growing the research towards creating better tools and technologies are also improving rapidly. One of the best CNN image classification architectures DenseNet introduced in a paper published in december 2016. Ever since the paper and the model gained attraction from the academics due to sophisticated image classification methods which would be able to outperform the other popular image classification algorithms such as ResNet architecture. Paper has more than 11000 citations which does provide evidence to the popularity of the method. In a normal Convolution Neural Network model when the images have been entered the model goes through every layer of the model to predict an answer to the classification problem. Descent architecture proposes a structure in which all of the layers will connect to the other layers that are available in the forward direction. Which means the processed data from the first layer of the model does connect to the final layer as well. Thus improving the overall model with the direct information from the previous layers of the model. 
Traditional normal convolutional neural networks that have a ‘x’ number of layers do have ‘x’ connections. Those connections do connect between a one layer and a layer after that. In a feed forward fashion, DenseNet’ every layer connects with every other layer. This means the number of connections is x(x+1)/2 as mentioned in the paper that proposes the densest architecture. As previously mentioned in the vanila CNN description images goes through the every layer sequentially, but the as densest layers connect all other previous layers information with the feature map from them, that gain from the input layer and other layers prior to a layer available going forward with the model. This makes a big advantage over the normal CNNs with keeping the original information thus making impact of the decision making as well. 
DenseNets consist of different types of dense blocks which are used accordingly with the dataset and the dimension of the image input. Basic Densest Composition layer is a type of dense block which each layer is followed with batch normalization layer, ReLu layer and 3x3 convolutional layer as in that order. There is another layer called BottleNeck DenseNet layer using 1x1 convolutional layer used before using normal convolutional layer of 3x3. Those two are the main dense block layers of the densest and the important ones. This DenseNet architecture has been applied to SVHN, CIFAR and ImageNet dataset by the authors of the original research paper and able to get improved accuracies from those datasets. 
As recent studies have shown the more deeper the convolutional neural network, the more accurate it can be on performing image recognition or classification. This does encourage the researchers to develop the classification algorithms using more newest and modest architectures of CNNs rather than developing algorithms using hand made CNN models or relatively old architectures like ResNet for example. Thus the DenseNet architecture stands out as it is a newly created architecture that goes deeper than other architectures and does have large community support behind it. 
Main advantage of the Densest is that later layers do get the information that the early layers receive without being washed down. Parameter count compared to ResNet is lower which does improve the computational time and efficiency. Since each layer in DenseNet receives all preceding layers as input features can be diverse and be able to recognize the outliers as well as a well maintained dataset. Also with a standard CNN model classifier uses most complex features as the matches while densest uses a range of features that is getting complex when going to deeper layers. That will result in a more accurate model with the ability to do the training with less number of data as well. 
> </p>

#### DenseNet vs Others

> <p style='text-align: justify;'>What are the differences between some CNN architectures is important to discuss because those differences may affect the performance of the problem I am trying to solve for better or for worse. Before the introduction of the DenseNet architecture the most used and popular architecture for image classification tasks in CNN were the ResNet architecture. In the paper, the authors point out the performance increase gained by the densest over ResNet on the CIFAR-100 dataset and Imagenet dataset. It shows that it is densest able to achieve a much lower error rate quickly than the ResNet when the error rate is compared against the parameter size. This means that the same parameter size densest were able to perform substantially better than the ResNet. Because the dense connection in the densest architecture improves the back propagation of the gradient while making the neural network easier to train when compared to ResNet architecture. </p>

![Comparison of the DenseNets and ResNets validation error on ImageNet dataset](/images/scopes/bone_abnormilities_detection/densenet-resnet-comparison.png "Comparison of the DenseNets and ResNets validation error on ImageNet dataset")	
<p style='text-align: center; font-style: italic'>Comparison of the DenseNets and ResNets validation error on ImageNet dataset</p>

> <p style='text-align: justify;'>In the study from this year (2020), conducted to see the difference between the large number of CNN architectures including DenseNet, ResNet, VGG, alexnet and squeezenet. It also compared the different versions of the same architecture like DenseNet-121 and DenseNet-169 for instance. This was an image classification task on the Chest X Rays which is the best way to identify a good architecture to tackle our research problem as well.</p>

### Implementation DenseNet Model

<p style='text-align: justify;'>For the bone abnormalities model used a DenseNet169 model. Models have been created for each study type of the dataset. And at the end all the models have been ensemble into one model. This convolutional neural network has been used because it is deeper, and accurate than a normal CNN and it is more efficient than most of the CNNs out there. After image preprocessing as in the data preprocessing section data is fed into a DenseNet model with weights as ‘imagenet’ weight. This is done because the model is pre-trained for some random images even before I start training on this dataset. Polling is done in ‘avg’ mode so that global pooling average would be applied to the output of the last convolutional layer. The output layer Dense layer also known as fully connected layer has been implemented. This output layer used sigmoid as the activation function that was also used in the lung cancer and lung pneumonia detection models.  To compile the model used the binary-cross entropy as the loss function. Also used the callbacks in the model as well. For this model I have used a reduced learning rate on the cue, when ‘val_loss’ is not improving and stopping the training if the model training is not improving on ‘val_loss’. These callbacks have a patience of one and eight respectively.</p>

```python
base_model = DenseNet169(input_shape=(None, None,3),
                     weights='imagenet',
                     include_top=False,
                     pooling='avg')
x = base_model.output
predictions = Dense(n_classes,activation='sigmoid')(x)
model = Model(inputs=base_model.input, outputs=predictions)
model.compile(loss="binary_crossentropy", optimizer='adam', metrics=['acc', 'mse'])
```	

<p style='text-align: justify;'> Above code describes how the model was built by the python code. As mentioned before the DenseNet was used with the 169 layers which could enhance the performance of the model. As described in the paper of the DenseNet architectural proposal, authors proposed a number of different DenseNet architectures that vary on the number of layers.  While I selected 169 layer architectures there are a number of the other architectures including DenseNet-121, DenseNet-201 and DenseNet-264. Below code snippet shows how the above created modal, fit to the generators with train images and validation images.</p>

```python
model_history = model.fit(
    train_generator,
    epochs=epochs,
    workers=1,
    use_multiprocessing=False,  
    steps_per_epoch = number_of_train_imges//8,
    validation_data=validation_generator,
    validation_steps=number_of_valid_imges//1,
    callbacks=callbacks_list
)
```
	
<p style='text-align: justify;'> Previously mentioned how I used a few callbacks to improve the model training including automatic model saving, automatic learning rate reduction and early stop function if the model does not improve its’ ‘val_loss’ over in significant manner. Those callbacks and how I implement is in the below code.</p>

```python
early_training_stop = EarlyStopping(monitor='val_loss', patience=10, verbose=1, min_delta=1e-4, restore_best_weights=True)
mcp_save = ModelCheckpoint('research_forearm_section.h5',verbose=1,
save_best_only=True, monitor='val_loss')
reduce_training_lr = ReduceLROnPlateau(monitor='val_loss', factor=0.1, verbose=1, patience=1,min_lr=0.00001)
callbacks_list = [early_training_stop, reduce_training_lr, mcp_save]
```
		
<p style='text-align: justify;'> After all the models have been trained, those have been saved as  ‘Hierarchical Data Format’ file with the extension of ‘h5’. Then I were able to collect those all models into one model file, combining them using basic python language functions. Below is the code for what I used to get all of the bone abnormality detection models into one single model.</p>

```python
model_output_list = [model(model_input) for model in models] 
model_output_list_avg = average(model_output_list) 
modelEns = Model(inputs=model_input, outputs=model_output_list_avg,    name='ensemble')  
```

##  Technologies Used

### Python

 <p style='text-align: justify;'>
Python programming language is created by Guido van Rossum and released to the public in 1991. This means that the python is a major and one of most curated and oldest languages to program. Python is a high level programming language that is also known as one of the best and one of the most used general purpose programming language out there. This can be used for the development of web development that includes frontend and backend, desktop based software development and even with the processing of big data. Python is also the mostly used scientific programming language that is preferred by the science community. 
Learning python is also easier compared to other popular programming languages. Syntax is based on interndation rather than brackets which makes it a cleaner way of programming and human readable syntax goes a long way for that. This makes it easier to understand it is also highly recommended for beginners to start coding.  As python super quick compared to the other languages as it is built for high computational tasks and data processing in mind. Python also supports packages and modules and highly encourages code reuse, also as python is an open source project it supports all of the major platforms. Support community for the python is very large due its popularity. That makes it an ideal candidate for the programming language to use for the machine learning and deep learning part for our research. 
</p>

* Tensorflow

> <p style='text-align: justify;'>One of the most famous and widely used deep learning libraries is the Google tensorflow. Google uses deep learning techniques to improve their own products, as an example google search recommendation system is a direct result of machine learning and deep learning techniques. Tensorflow architecture has three parts which are processing the data, building the model and training and estimating the outcome. This architecture is really helpful to our research as I wanted to train the X-ray images and get an outcome of whether the image contains any abnormalities or diseases. This library does contain a lot of options to image preprocessing which is a very important part of deep learning research.
> Tensorflow also supports a large variety of algorithms including linear regression, classification, deep learning classification and much more. This has also contributed to the fact that this library is becoming more famous day by day. As C++ the main programming language used in the library it is very fast in large scale computational tasks such as image preprocessing and training using matrices. After the model creation it also helps the developers to use those models in platforms such as web, mobile and desktop. After training the possibilities are limitless as tensorflow supports every major platform including linux.</p>
 
* Keras

> <p style='text-align: justify;'>
Keras is a powerful and easy-to-use free open source Python library for developing and
evaluating deep learning models. It wraps the efficient numerical computation libraries
Theano and TensorFlow and allowed us to define and train neural network models in
just a few lines of code. So that keras was used us to train the CNN and preprocess
the image dataset.
> </p>

* OpenCv

> <p style='text-align: justify;'>
OpenCv was used to resize images for a same size, as training
datasets,testing and inserting image in the real world can be different sizes.
> </p>

###  Orthanc

<p style='text-align: justify;'>
Orthanc is a dicom server which can be stored dicom images and meta data
with patient, physician details. We used it for storing dicom images and
metadata.
</p>

###  Flask Framework

<p style='text-align: justify;'>
Flask is a lightweight WSGI web application framework. It is designed to make getting
started quick and easy, with the ability to scale up to complex applications. Also there
are many extensions provided by the community that make adding new functionality
easy. So that python flask was used to return the details of the result to the frontend.
</p>

###  DICOM Viewer with AI prediction - React JS

<p style='text-align: justify;'>
React js was selected to implement the front end as it is Easy to Learn ,Use and  creating Dynamic Web Applications Becomes Easier.And the react JS has  reusable components.So that it makes more easier to extend the application with new features for future developments.So that react JS was used to implement the viewer with 
AI prediction feature for X-ray Images.
</p>       

## Commercialization

<p style='text-align: justify;'>
There is no current system in Sri Lankan hospitals to address the issues within
the radiology field. Currently when a patient gets an X-ray it directly goes to the
physician for a special doctor who prescribes it without going through the radiologist.
It goes to the radiologist if the doctor asks for a report regarding the X-ray. Which
makes potential issues with the X-ray that could have been detected through
radiologist goes with any detection. And for the radiologists there needs to be a fully
fledged PACS system and a Viewer that can create a report regarding the X-ray.
Which makes radiologist working time less as he/she needs to in person.
Main customers of the product will be hospitals in Sri Lanka. Especially
private hospitals will be attracted to products rather than their government
counterparts. Detection of bone abnormalities are proposed by this system that can be
sold as a feature that no other system has. That also makes the current PACS more
work with less productivity. This product gives hassle free internet solutions to bulky
PACS in hospitals.
As the system must connect to the internet it would not be possible to host the
system by the hospitals themselves. Because it has to work with standards of internet
41security regarding medical data it should be on a centralized server. So the system
can be sold as two separate stages. The access to the web application as well as
admin panel for image uploading as a one time cost and monthly I can charge the
hospitals for hosting the application and medical images and data.
So, the proposed system will solve a lot of the current issues facing radiology
in Sri Lanka. As the proposed system is a web based system, it can be accessed
through the internet there would be direct access to radiologists medical images. This
type of system can be commercially viable and can be deployed in private hospitals
because that could increase the productivity of their hospital while the system could
also bring down time that patient has to wait. Because private hospitals are always
looking for the quickest and efficient way of working this product would make sense
for them to have rather than not.
</p>
 
## References
 
 1. <p style='text-align: justify;'>P. Rajpurkar et al., "MURA: Large Dataset for Abnormality Detection in Musculoskeletal Radiographs", arXiv.org, 2020. [Online][Accessed: 09- Jul- 2020].</p>
 2. <p style='text-align: justify;'>B. Q. Huynh, H. Li, and M. L. Giger, “Digital mammographic tumor classification using transfer learning from deep convolutional neural networks,” Journal of Medical Imaging, vol. 3, no. 3, p. 34501, Aug. 2016.</p>
 3. <p style='text-align: justify;'>S. Pereira, A. Pinto, V. Alves, and C. A. Silva, “Brain Tumor Segmentation Using Convolutional Neural Networks in MRI Images,” IEEE Transactions on Medical Imaging, vol. 35, no. 5, pp. 1240–1251, May 2016</p>
 4. <p style='text-align: justify;'>V. I. Iglovikov, A. Rakhlin, A. A. Kalinin, and A. A. Shvets, “Paediatric Bone Age Assessment Using Deep Convolutional Neural Networks,” in Deep Learning in Medical Image Analysis and Multimodal Learning for Clinical Decision Support, Springer International Publishing, 2018, pp. 300–308.</p>
 5. <p style='text-align: justify;'>R. H. Abiyev and M. K. S. Ma’aitah, “Deep Convolutional Neural Networks for Chest Diseases Detection,” Journal of Healthcare Engineering, vol. 2018, pp. 1–11, Aug. 2018.</p>
 6. <p style='text-align: justify;'>N. J. Fesharaki and H. Pourghassem, “Medical X-ray Images Classification Based on Shape Features and Bayesian Rule,” in 2012 Fourth International Conference on Computational Intelligence and Communication Networks, 2012.</p>
 7. <p style='text-align: justify;'>N. Barakat, A. P. Bradley, and M. N. H. Barakat, “Intelligible Support Vector Machines for Diagnosis of Diabetes Mellitus,” IEEE Transactions on Information Technology in Biomedicine, vol. 14, no. 4, pp. 1114–1120, Jul. 2010.</p>
 8. <p style='text-align: justify;'>A. O. de Carvalho Filho, A. C. Silva, A. C. de Paiva, R. A. Nunes, and M. Gattass, “Lung-Nodule Classification Based on Computed Tomography Using Taxonomic Diversity Indexes and an SVM,” Journal of Signal Processing Systems, vol. 87, no. 2, pp. 179–196, Apr. 2016.</p>
 9. <p style='text-align: justify;'>Sivakumar, S., & Chandrasekar, C. (2013). Lung nodule detection using fuzzy clustering and support vector machines. International Journal of Engineering and Technology (IJET), 5(11), 179–185.</p>
 10. <p style='text-align: justify;'>X. Liu, Z. Deng, and Y. Yang, “Recent progress in semantic image segmentation,” Artificial Intelligence Review, vol. 52, no. 2, pp. 1089–1106, Jun. 2018.</p>
 11. <p style='text-align: justify;'>S. Bahrampour, N. Ramakrishnan, L. Schott, and M. Shah, “Comparative Study of Deep Learning Software Frameworks,” arXiv:1511.06435v3 [cs.LG], Mar. 2016</p>
 12. <p style='text-align: justify;'>V. Sze, Y.-H. Chen, T.-J. Yang, and J. S. Emer, “Efficient Processing of Deep Neural Networks: A Tutorial and Survey,” Proceedings of the IEEE, vol. 105, no. 12, pp. 2295–2329, Dec. 2017.</p>
 13. <p style='text-align: justify;'>M. E. Paoletti, J. M. Haut, J. Plaza, and A. Plaza, “A new deep convolutional neural network for fast hyperspectral image classification,” ISPRS Journal of Photogrammetry and Remote Sensing, vol. 145, pp. 120–147, Nov. 2018.</p>
