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
    expect(portOfLoading).toBeInTheDocument()
    expect(portOfDischarge).toBeInTheDocument()
  });
