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
<img width="930" alt="recognition_2" src="https://github.com/user-attachments/assets/7a2909d8-daf1-468f-98e7-b80a17c6eb0c" />
Recognized hand sign 2

<img width="908" alt="Capture_L" src="https://github.com/user-attachments/assets/4075c423-b2f0-43f7-a883-c0e07df78717" />
Captured hand sign L.

<img width="865" alt="recognition_L" src="https://github.com/user-attachments/assets/f997737c-90c7-4299-b7cb-702109127815" />
Recognized hand sign L.

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

                +-----------------------------------+
                |        Computer System            |
                |   (Processing Unit & Display)     |
                +-----------------------------------+
                           |  
                           | (1) Initialization, Display UI, Store Sign Data
                           V
         +-----------------------------------------+
         |             User Interface             |  <--- (User Input: Add Sign, Start Recognition)
         |   - Displays sign name                 |         |
         |   - Shows recognition results          |         |
         |   - Shows captured frames              |         |
         +-----------------------------------------+         |
                           |                                 |
                           V                                 |
         +-----------------------------------------+           |
         |              Camera (Input)            |           |
         |  - Captures real-time video frames     |           |
         +-----------------------------------------+           |
                           | (2) Capture Frames, Process Frames |
                           V                                 |
         +-----------------------------------------+           |
         |         Frame Processing Unit          |           |
         |  - Convert to grayscale                |           |
         |  - Apply Gaussian blur and histogram   |           |
         |  - Thresholding and hand segmentation  |           |
         +-----------------------------------------+           |
                           |                                 |
                           V                                 |
         +-----------------------------------------+           |
         |            Sign Template Matching      |           |
         |  - Compare frames to stored templates  |           |
         |  - Calculate score (difference measure)|           |
         +-----------------------------------------+           |
                           |                                 |
                           V                                 |
         +-----------------------------------------+           |
         |            Sign Data Storage           |           |
         |  - Store new sign templates            |           |
         |  - Load existing sign templates        |           |
         +-----------------------------------------+           |
                           |                                 |
                           V                                 |
                +-----------------------------------+         |
                |    Recognized Sign Name Display  | <--------+
                |  (Shows Recognized Sign to User) |
                +-----------------------------------+





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
