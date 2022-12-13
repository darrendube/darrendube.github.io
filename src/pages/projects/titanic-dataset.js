import React from "react";
import ProjectTemplate from "../../templates/projectTemplate";
import {
    Button,
    chakra,
    FormControl,
    FormHelperText,
    FormLabel,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    Stack,
    useDisclosure,
    useToast
} from "@chakra-ui/react";
import {Formik} from "formik";
import {stringify} from "query-string";

var data = "this is the data";

function predict(values, toast, onOpen0, onOpen1) {
  console.log(values);

  fetch(`https://darrendube.pythonanywhere.com/?${stringify(values)}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      if (data == 1) {
        onOpen1();
      } else {
        onOpen0();

      }
    });
}

const TitanicDatasetProject = () => {
  var formData;
  const toast = useToast();
  const { isOpen:isOpen0, onOpen:onOpen0, onClose:onClose0 } = useDisclosure(); /*FALSE modal*/
  const { isOpen:isOpen1, onOpen:onOpen1, onClose:onClose1 } = useDisclosure() /*TRUE modal*/

  return (
    <ProjectTemplate
      date="November 5, 2022"
      title="Would you have survived the titanic?"
      intro="A Decision Tree Classifier that predicts whether you would have survived the Titanic, based on age, sex, gender, and number of family members on board."
      tags={["python", "machine learning"]}
      slug="titanic-dataset"
      themecolor={"#26304f"}
    >
      <chakra.div mx="32px">
          <p>This machine learning algorithm was trained on the <chakra.a href="https://www.kaggle.com/c/titanic" color="#3182CE !important">Titanic Dataset</chakra.a>, and attained a 77% score on Kaggle. </p>
          <p><br/><b>Fill in the form below to test it out: </b></p>

        <Formik
          initialValues={{
            age: 0,
            fare: 0,
            parents: 0,
            siblings: 0,
            spouse: 0,
            children: 0,
            sex: "male",
            title: "Mr"
          }}
          onSubmit={values => predict(values, toast, onOpen0, onOpen1)}
        >
          {({ handleSubmit, values, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <Stack mt={"20px"}>
                <FormControl isRequired>
                  <FormLabel mb="10px !important">How old are you?</FormLabel>
                  <NumberInput
                    name="age"
                    id="age"
                    max={140}
                    mb="20px !important"
                    onChange={handleChange}
                  >
                    <NumberInputField onChange={handleChange} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel mb="10px !important">
                    What fare would you be prepared to pay? (in
                    Nov 2022 US Dollars)
                    <FormHelperText>
                      First Class passengers were more likely to survive than
                      third class passengers
                    </FormHelperText>
                  </FormLabel>

                  <Select
                    name="fare"
                    id="fare"
                    placeholder="Select"
                    mb="20px !important"
                    onChange={handleChange}

                  >
                    <option value="83">First Class: $8,300</option>
                    <option value="20">Second Class: $2,000</option>
                    <option value="13">Third Class: $1,300</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel mb="10px !important">
                    How many siblings would accompany you on the Titanic?
                  </FormLabel>
                  <Select
                    name="siblings"
                    id="siblings"
                    mb="20px !important"
                    onChange={handleChange}
                    placeholder={"Select"}
                  >
                    <option value="0">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7 or more</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel mb="10px !important">
                    Would your spouse have accompanied you?
                  </FormLabel>
                  <Select
                    name="spouse"
                    id="spouse"
                    placeholder="Select"
                    mb="20px !important"
                    onChange={handleChange}
                    placeholder={"Select"}
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel mb="10px !important">
                    How many children would have accompanied you?
                  </FormLabel>
                  <Select
                    name="children"
                    id="children"
                    mb="20px !important"
                    onChange={handleChange}
                    placeholder={"Select"}
                  >
                    <option value="0">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7 or more</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel mb="10px !important">
                    How many parents would accompany you on board?
                  </FormLabel>
                  <Select
                    name="parents"
                    id="parents"
                    mb="20px !important"
                    onChange={handleChange}
                    placeholder={"Select"}
                  >
                    <option value="0">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel mb="10px !important">
                    What is your sex?
                    <FormHelperText>
                      Female passengers were more likely to survive than male
                      passengers
                    </FormHelperText>
                  </FormLabel>
                  <Select
                    name="sex"
                    id="sex"
                    mb="20px !important"
                    onChange={handleChange}
                    placeholder="Select"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option
                      value={["female", "male"][Math.floor(Math.random() * 2)]}
                    >
                      Other
                    </option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel mb="10px !important">
                    What is your title?
                  </FormLabel>
                  <Select
                    name="title"
                    id="title"
                    mb="20px !important"
                    onChange={handleChange}
                    placeholder={"Select"}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Master">Master (if you're under 18)</option>
                  </Select>
                </FormControl>
                <Button
                  loadingText="Predicting"
                  colorScheme="teal"
                  id="submitbutton"
                  borderRadius="0px"
                  type="submit"
                >
                  Predict
                </Button>
                // retry this without changing anything. had made a typo in
                "pys-onclick" but this has been changed
              </Stack>
            </form>
          )}
        </Formik>
      </chakra.div>

        <Modal isOpen={isOpen0} onClose={onClose0}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Result:</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p> Unfortunately, you would <b>NOT</b> have <b> SURVIVED</b> the Titanic.</p>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose0}>
                        Close
                    </Button>

                </ModalFooter>
            </ModalContent>
        </Modal>

        <Modal isOpen={isOpen1} onClose={onClose1}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Result:</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p> Fortunately, you would have <b>SURVIVED</b> the Titanic</p>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose1}>
                        Close
                    </Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    </ProjectTemplate>
  );
};

export default TitanicDatasetProject;
