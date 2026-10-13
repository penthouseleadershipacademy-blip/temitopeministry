import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';
const projectId = 'vlwtp4qq';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export default defineConfig({ name: 'temitope-ministry', title: 'Temitope Ayegbusi Ministry', projectId, dataset, plugins: [structureTool(), visionTool()], schema: { types: schemaTypes } });
