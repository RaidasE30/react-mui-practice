import React, { useState } from 'react';
import { Autocomplete, Stack, TextField } from '@mui/material';

type Skill = {
  id: number,
  label: string,
};

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const AutocompletePage = () => {
  const [value, setValue] = useState<string | null>(null);
  console.log({ value });

  const [skill, setSkill] = useState<Skill | null>(null);
  console.log({ skill });

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        value={value}
        onChange={(event:any, newValue: string | null) => setValue(newValue)}
        renderInput={
          (params) => (
            <TextField
              {...params}
              label="Skills"
            />
          )
        }
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        value={skill}
        onChange={(event:any, newValue: Skill | null) => setSkill(newValue)}
        renderInput={
          (params) => (
            <TextField
              {...params}
              label="Skills"
            />
          )
        }
      />
    </Stack>
  );
};

export default AutocompletePage;
