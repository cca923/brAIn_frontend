import Item from "./Item";
import { ConceptsContainer } from "./styles";

const list = [
  {
    concept: "Paxos protocol",
    percentage: 100,
  },
  {
    concept: "Acceptors",
    percentage: 86,
  },
  {
    concept: "Distributed consensus",
    percentage: 73.5,
  },
  {
    concept: "Distributed consensus",
    percentage: 50,
  },
  {
    concept: "Distributed consensus",
    percentage: 0,
  },
  {
    concept: "Distributed consensus",
    percentage: 34,
  },
  {
    concept: "Distributed consensus",
    percentage: 28,
  },
  {
    concept: "Distributed consensus",
    percentage: 62,
  },
];

const Concepts = () => {
  return (
    <ConceptsContainer>
      <h2 className="title">Key Concepts</h2>
      <p className="description">
        Familiarity based on AI Quiz and AI Chat results, scored from 0 to 100%
      </p>
      <div className="wrapper">
        {list?.map((data, index) => (
          <Item key={index} {...data} />
        ))}
      </div>
    </ConceptsContainer>
  );
};
export default Concepts;
