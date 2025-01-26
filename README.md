# Sign Language Interpretation(ISL) 🎯


## Basic Details
### Team Name: Innovista


### Team Members
- Member 1: Ammu N Raj - College of Engineering,Trivandrum
- Member 2: Angel Roy -  College of Engineering,Trivandrum
- Member 3: Gowri Lal - College of Engineering,Trivandrum

### Hosted Project Link
[mention your project hosted project link here]

### Project Description
Input: Video feed or images of hand gestures.
Output: Text or speech translation of the detected gestures.
Target Audience: Deaf/hard-of-hearing individuals, educators, or the general public.
Sign Language Type: ISL(Indian Sign Language)

### The Problem statement
In a world where communication barriers hinder inclusivity, individuals who rely on sign language often face challenges in interacting with those unfamiliar with it. Despite the availability of advanced technology, there is a lack of accessible, real-time solutions that can interpret sign language into spoken or written text for seamless communication.
The goal of this project is to develop an AI-powered Sign Language Interpreter software that uses computer vision and machine learning to bridge this gap. The software should:
1.Accurately detect and classify hand gestures 
2.Translate detected signs into text 
3.Be user-friendly
By addressing this problem, the software aims to promote inclusivity, enhance accessibility, and empower individuals relying on sign language to communicate effortlessly in everyday scenarios.

### The Solution
First, we hook up your webcam like a modern-day crystal ball. It’s not just any webcam—it’s a hand detective! It watches your hand movements and gestures like a hawk, ready to capture every sign you make.
Behind the scenes, we’ve trained a powerful deep learning model that’s basically a gesture whisperer. It knows sign language like a pro and recognizes hand shapes, finger positions, and movement patterns.The edge-traced approach is all about focusing on the outlines of gestures for precise and efficient detection—clean, sharp, and accurate.The model takes this data and works out what you’re saying, sign by sign. Whether it’s "hello" or "thank you," the AI deciphers the movement with lightning speed. It’s like having a language decoder for your hands!Ta-da! The interpreted sign pops up on the screen as text.

## Technical Details
### Technologies/Components Used
For Software:
- Languages used: Python
- Frameworks used: Tensorflow
- Libraries used: OpenCV,NumPy,OS,Time
- Tools used: Operating System Tools,File System,IDE

For Hardware:
- Main components: Webcam,Computer/Laptop
- Specifications:  Webcam,Computer/Laptop,Lighting Setup,External Storage
- Tools required: Tripod/Camera Mount,Ring Light,External Hard Drive,UPS,USB Hubs

### Implementation
For Software:
# Installation
python --version
python -m venv venv
.\venv\Scripts\activate
pip install opencv-python opencv-python-headless numpy
pip list
mkdir data

# Run
python sign_language_interpreter.py

### Project Documentation
For Software:

# Screenshots (Add at least 3)
![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

# Diagrams
![image](https://github.com/user-attachments/assets/dfba306f-85a8-46b4-9352-a82a41d3c23e)

The system begins by capturing a live video stream using a webcam or external camera. The camera captures the user's gestures in real-time. Edge Tracing extracts the contours of the hand and its edges to create a clear and distinct representation of the gesture. Grayscale Conversion converts the frame to grayscale to reduce complexity and focus on shapes. Gaussian Blurring removes noise and smoothens the edges for better recognition.Thresholding segments the hand region from the background using binary thresholding.A Region of Interest (ROI) is selected, focusing on the hand gesture area.Features such as edges, contours, or hand shapes are extracted to form a unique "fingerprint" for the gesture.Template Matching compares the extracted features with pre-stored templates of signs.If a match is found within a predefined threshold, the gesture is recognized.The recognized sign is displayed on the screen in real-time as text.Feedback is provided, such as the name of the detected sign, matching confidence score.

For Hardware:

# Schematic & Circuit
Circuit Diagram:

    +--------------------+
    |  Camera (Input)    |
    +--------------------+
             |
             V
    +--------------------+      +-------------------+
    |  Frame Processing  | ---> | Sign Matching     |
    |  (Grayscale, Blur, |      | (Template Matching)|
    |  Thresholding)     |      +-------------------+
    +--------------------+                |
             |                           V
             V                  +---------------------+
    +---------------------+      |  User Interface     |
    |   Sign Data Storage | <--- | (Display Recognition|
    |    (Saved Templates)|      |  Result on Screen)  |
    +---------------------+      +---------------------+
             |
             V
    +--------------------+
    | User Input (Capture)|
    +--------------------+

Camera (Input): Captures video frames in real-time, serving as the primary input for hand gesture recognition.
Frame Processing: Pre-processes the captured frame to highlight the hand region using grayscale conversion, Gaussian blur, and thresholding.
Sign Matching: Compares the processed frame against saved sign templates using template matching algorithms.
Sign Data Storage: Stores the existing sign templates and their respective meanings.
User Interface: Displays the recognized sign name and score on the screen, providing feedback to the user.
User Input (Capture): Allows the user to capture training data by pressing keys, store new signs, and control the program

Schematic Diagram:

+------------------------+
|                        |
|  +------------------+   |    +---------------------------+
|  |   Camera Module  |---|--->|       Processing Unit      |
|  |  (Capture Input) |   |    | (PC or Microcontroller)   |
|  +------------------+   |    +---------------------------+
|                        |            |     |    |  
+------------------------+            |     |    V
                                      |  +----------------------+
                                      |  | Frame Processing     |
                                      |  | (Grayscale, Blurring,|
                                      |  | Thresholding)        |
                                      |  +----------------------+
                                      |
                                      V
                           +----------------------------+
                           |  Sign Matching Algorithm   |
                           |  (Template Matching)       |
                           +----------------------------+
                                      |
                                      V
                         +----------------------------+
                         | User Interface (Output)    |
                         | (Display Result, Feedback) |
                         +----------------------------+
                                      |
                                      V
                        +-----------------------------+
                        |   Display (Monitor/Screen)  |
                        +-----------------------------+


The Camera Module captures video frames. The frames are sent to the Processing Unit, where they are processed (grayscale, blur, thresholding). The processed frame is compared to stored sign templates in the Sign Matching Algorithm. The matched sign (if found) or feedback is sent to the User Interface, which displays it on the Monitor/Screen.

# Build Photos
![Team](Add photo of your team here)


![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

### Project Demo
# Video
[Add your demo video link here]
*Explain what the video demonstrates*

# Additional Demos
[Add any extra demo materials/links]

## Team Contributions
- Ammu N Raj: Image Processing Pipeline and Camera Integration and Real-time Processing
- Angel Roy: Frontend Development and User Interface Setup
- Gowri Lal: Program Design and Architecture and Data Management

---
Made with ❤️ at TinkerHub
