import { useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface PilotSelectionProps {
    recommendedPilots: Array<string>
}

export const PilotSelection: React.FC<PilotSelectionProps> = ({
    recommendedPilots
}) => {
    const [expanded, setExpanded] = useState<number>(-1);
    const handleChange = (acc: number) => (_: any, isExpanded: boolean) => {
        setExpanded(isExpanded ? acc : -1);
    };
    
    return (
        <div className="w-[50%]">
            {recommendedPilots.map((pilot, ind) => {
                return (
                    <Accordion expanded={expanded === ind} onChange={handleChange(ind)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography variant='h4'>{pilot}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='h5'>
                                This section contains the collapsible content of item 1
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}   
        </div>
    )
}

export default PilotSelection;