import Counter from "./Counter";
import ToggleText from "./Toggle";
import SimpleForm from "./SingleForm";
import ToggleConditionComponent from "./ToggleConditionComponent";
import SingleConditionComponent from "./SingleConditionComponent";
const Day02 = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h1> Day 02: useState, Event, Form</h1>
            <hr />

            <h2>1. Counter</h2>
            <Counter />

            <h2>2. Toggle Text</h2>
            <ToggleText />

            <h2>3. Simple Form</h2>
            <SimpleForm />
            <h2>4. ToggleConditionComponent</h2>
            <ToggleConditionComponent />
            <h2>5. SingleConditionComponent</h2>
            <SingleConditionComponent />
        </div>
    );
};

export default Day02;
