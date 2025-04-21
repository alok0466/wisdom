import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Featured Projects
export const featuredProjects = pgTable("featured_projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertFeaturedProjectSchema = createInsertSchema(featuredProjects).pick({
  title: true,
  description: true,
  imageUrl: true,
});

// Catalogue Items
export const catalogueItems = pgTable("catalogue_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertCatalogueItemSchema = createInsertSchema(catalogueItems).pick({
  title: true,
  category: true,
  imageUrl: true,
});

// Catalogue Item Details
export const catalogueItemDetails = pgTable("catalogue_item_details", {
  id: serial("id").primaryKey(),
  catalogueItemId: serial("catalogue_item_id").notNull(), // References catalogueItems.id
  description: text("description").notNull(),
  mainImage: text("main_image").notNull(),
  additionalImages: jsonb("additional_images").notNull().$type<string[]>(),
  designElements: jsonb("design_elements").notNull().$type<string[]>(),
  projectDetails: jsonb("project_details").notNull().$type<Record<string, string>>(),
});

export const insertCatalogueItemDetailSchema = createInsertSchema(catalogueItemDetails).pick({
  catalogueItemId: true,
  description: true,
  mainImage: true,
  additionalImages: true,
  designElements: true,
  projectDetails: true,
});

// Team Members
export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  imageUrl: text("image_url").notNull(),
  linkedin: text("linkedin"),
  instagram: text("instagram"),
});

export const insertTeamMemberSchema = createInsertSchema(teamMembers).pick({
  name: true,
  position: true,
  imageUrl: true,
  linkedin: true,
  instagram: true,
});

// Export Types
export type FeaturedProject = typeof featuredProjects.$inferSelect;
export type InsertFeaturedProject = z.infer<typeof insertFeaturedProjectSchema>;

export type CatalogueItem = typeof catalogueItems.$inferSelect;
export type InsertCatalogueItem = z.infer<typeof insertCatalogueItemSchema>;

export type CatalogueItemDetail = typeof catalogueItemDetails.$inferSelect;
export type InsertCatalogueItemDetail = z.infer<typeof insertCatalogueItemDetailSchema>;

export type TeamMember = typeof teamMembers.$inferSelect;
export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
