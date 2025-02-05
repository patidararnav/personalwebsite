import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const SectionContainer = styled(motion.section)`
  margin: 4rem 0;
  padding: 2rem;
  background-color: var(--secondary-bg);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: var(--accent-color);
  }
`

export const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--secondary-text);
  margin-bottom: 1.5rem;
`

export const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-color);
    color: var(--primary-bg);
  }
` 