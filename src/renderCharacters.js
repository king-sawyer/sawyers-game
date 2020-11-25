import React from "react";
import "./renderCharacters.css";

class RenderCharacters extends React.Component {
  state = {
    activeCharacterId: "0",
  };

  handleChange = (newCharacterId) => {
    this.setState({
      activeCharacterId: newCharacterId,
    });
  };
  displayCharacters = () => {
    if (this.state.activeCharacterId !== "0") {
      return (
        <ul className="characterUL">
          <li key="0" className="characterLI">
            <b>
              {this.props.data.characters[this.state.activeCharacterId].title}{" "}
            </b>
          </li>
          <li key="1" className="characterLI">
            <b>Ability: </b>
            {this.props.data.characters[this.state.activeCharacterId].ability}
            {}
          </li>
          <hr />
          <li className="characterLI">
            <b>What to expect:</b>
          </li>
          <li key="2" className="characterLI">
            {
              this.props.data.characters[this.state.activeCharacterId]
                .firstNight
            }
            {}
          </li>
          <hr />
          <li className="characterLI">
            {this.props.data.characters[this.state.activeCharacterId].tidBit}
          </li>
        </ul>
      );
    }
  };

  render() {
    return (
      <div className="renderCharacter">
        <div className="characterSelect">
          <h2>Select a character to learn about:</h2>
          <select
            onChange={(e) => {
              this.handleChange(e.target.value);
            }}
            className="select"
          >
            {this.props.data.characters.map((character, i) => {
              return (
                <option key={i} value={character.id}>
                  {character.title}
                </option>
              );
            })}
          </select>

          {this.displayCharacters()}

          {/* <ul>
            {this.props.data.characters[this.state.activeCharacterId].map(
              (item, i) => {
                return <li>Character name: {item.title}</li>;
              }
            )} */}
          {/* </ul> */}
        </div>
      </div>
    );
  }
}

export default RenderCharacters;
