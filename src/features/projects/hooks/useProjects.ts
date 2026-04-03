import { useState, useEffect } from 'react';
import type { Project } from '../types/project';

// This is a controller that would fetch data from an API
export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {
                // Mock data from the Figma design content
                const data: Project[] = [
                    {
                        id: 'vrinda-apartments',
                        title: 'TULSI THIRD EYE',
                        subtitle: 'Live Where Faith Feels at Home',
                        description: 'Premium 1 BHK Living Spaces in Vrindavan.',
                        location: 'Mathura-Vrindavan road, Mathura, Uttar Pradesh',
                        price: '80 LAKHS',
                        unitsAvailable: 23,
                        status: 'new',
                        image: 'https://shriyamunainfra.com/assets/project1.png',
                        amenities: ['Gym', 'Swimming Pool', 'Club House', 'Temple', 'Green Park', 'Modern lift', 'Security Guard', 'Electricity Power'],
                        gallery: []
                    }
                ];
                setProjects(data);
            } catch (err) {
                setError('Failed to load projects');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return {
        projects,
        isLoading,
        error
    };
};
