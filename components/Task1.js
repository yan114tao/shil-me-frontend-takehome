import Builder from "./builder/Builder";

export default function Task1() {
  const Builder1 = {
    title: null,
    description: null,
    style: {
      backgroundColor: "white",
      color: "black",
      width: "300px",
      borderRadius: "10px",
      padding: "10px",
    },
    components: [
      {
        name: "build1-text",
        type: "text",
        placeholder:
          "These are some cool use cases for our programmatic UI generator!",
        defaultValue: "text input content",
      },
    ],
  };

  const Builder2 = {
    title: "Submit Proposal",
    description: "Submit a proposal for DAO governance.",
    style: {
      backgroundColor: "#F2F2F2",
      color: "black",
      width: "300px",
      borderRadius: "10px",
      padding: "10px",
    },
    components: [
      {
        name: "build2-long-text",
        type: "input-long-text",
        placeholder: "I propose that we...",
        title: "Your proposal",
        description: null,
        defaultValue:
          "This is long text !!! This is long text !!! This is long text !!! This is long text !!! This is long text !!! This is long text !!!",
        style: {
          backgroundColor: "blue",
          color: "white",
        },
      },
      {
        name: "build2-input-number",
        type: "input-number",
        placeholder: 42,
        title: "Value attached",
        description:
          "This is the amount of value you're pledging to this cause in ETH.",
        defaultValue: 99,
        style: {
          backgroundColor: "blue",
          color: "white",
        },
      },
      {
        type: "button",
        title: "Propose",
        style: {
          backgroundColor: "blue",
          color: "white",
          width: "100%",
          borderRadius: 5,
          border: "none",
          padding: "8px 0",
          fontWeight: "bold",
        },
        callback: () => {
          console.log("button from Builder1 pressed!");
        },
      },
    ],
  };

  const Builder3 = {
    title: "Mint NFT",
    description: "Select how many NFTs from the collection you’d like to mint.",
    style: {
      backgroundColor: "#F2F2F2",
      color: "black",
      width: "300px",
      borderRadius: "10px",
      padding: "10px",
    },
    components: [
      {
        name: "build3-input-number",
        type: "input-number",
        placeholder: 42,
        title: "Number of NFTs",
        description: null,
      },
      {
        type: "button",
        title: "Mint!",
        style: {
          backgroundColor: "green",
          color: "white",
          width: "100%",
          borderRadius: 5,
          border: "none",
          padding: "8px 0",
          fontWeight: "bold",
        },
        callback: () => {
          console.log("button from Builder2 pressed!");
        },
      },
    ],
  };


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        alignItems: "center"
      }}
    >
      <Builder config={Builder1} />
      <Builder config={Builder2} />
      <Builder config={Builder3} />
    </div>
  );
}