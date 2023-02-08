import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion, AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';

const AccordionPage = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
      >
        <AccordionSummary
          id="panel1-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A, amet architecto at autem commodi consectetur, corporis, dolores
            ea eos iure iusto nesciunt nihil quidem reprehenderit rerum tenetur
            voluptatum. Officia, sapiente?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
      >
        <AccordionSummary
          id="panel2-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A, amet architecto at autem commodi consectetur, corporis, dolores
            ea eos iure iusto nesciunt nihil quidem reprehenderit rerum tenetur
            voluptatum. Officia, sapiente?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
      >
        <AccordionSummary
          id="panel3-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A, amet architecto at autem commodi consectetur, corporis, dolores
            ea eos iure iusto nesciunt nihil quidem reprehenderit rerum tenetur
            voluptatum. Officia, sapiente?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionPage;
