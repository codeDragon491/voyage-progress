import React from 'react'
import { render, screen } from '@testing-library/react'
import VoyageProgress from './VoyageProgress'

test('render port names', () => {
    render(<VoyageProgress   
        portOfLoading="Copenhagen" 
        portOfDischarge="Oslo"
        departureTime="Mon, Jul 8 2022 10:00"
        arrivalTime="Mon, Jul 8 2022 18:00"/>
        )
    const portOfLoading = screen.getByText('Copenhagen')
    const portOfDischarge = screen.getByText('Oslo')
    expect(portOfLoading && portOfDischarge).toBeInTheDocument()
  });

test('render correct number of blue dots at a given progress', () => {
    const { container } = render(<VoyageProgress   
        portOfLoading="Copenhagen" 
        portOfDischarge="Oslo"
        departureTime="Sat, Oct 1 2022 09:00"
        arrivalTime="Sat, Oct 1 2022 17:00"/>
        )
    const progress = 10
    const darkDots = container.getElementsByClassName("dark-dot");
    // needs to be divided by 2 because componnet renders twice
    expect(darkDots.length / 2).toBe(progress);
  }); 

