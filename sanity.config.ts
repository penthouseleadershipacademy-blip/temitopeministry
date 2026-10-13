import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replace-me';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export default defineConfig({ name: 'temitope-ministry', title: 'Temitope Ayegbusi Ministry', projectId, dataset, plugins: [structureTool(), visionTool()], schema: { types: schemaTypes } });
