import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { getBeers } from "../services/getBeers";
import { Beer as BeerType } from "../types";
import { Beer } from "./Beer";
import { TextInput } from "./TextInput";

const Container = styled.div`
  padding: 5rem;
`;

const BeerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Beers: React.FC = () => {
  const [beers, setBeers] = useState<BeerType[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    getBeers(filter).then(setBeers);
  }, [filter]);

  return (
    <Container>
      <TextInput
        onClear={() => setFilter("")}
        value={filter}
        onChange={(event) => setFilter(event.currentTarget.value)}
      />
      <BeerContainer>
        {beers.map((beer) => (
          <Beer
            key={beer.id}
            beer={beer}
            onClick={() =>
              window.open(
                `https://brewdogrecipes.com/recipes/${beer.name
                  .replaceAll(":", "")
                  .replaceAll(" - ", "")
                  .replaceAll(" ", "-")}`,
                "_blank"
              )
            }
          />
        ))}
      </BeerContainer>
    </Container>
  );
};
