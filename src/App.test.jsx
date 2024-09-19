import { describe, expect, it, test } from "vitest";
import App from "./App";
import { render, screen } from '@testing-library/react';


describe('App.jsx', () => {
    it('renders a welcome message', () => {
        const underTest = render(<App />)
        expect(underTest.getByText("Welcome to EverCraft!")).toBeTruthy();
    });
});