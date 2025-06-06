import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import nodemailer from 'nodemailer';


// Read JSON data files
const catalogueItemsPath = path.join(import.meta.dirname, "data", "catalogueItems.json");
const featuredProjectsPath = path.join(import.meta.dirname, "data", "featuredProjects.json");
const teamMembersPath = path.join(import.meta.dirname, "data", "teamMembers.json");

// Parse JSON data
const catalogueItems = JSON.parse(fs.readFileSync(catalogueItemsPath, "utf-8"));
const featuredProjects = JSON.parse(fs.readFileSync(featuredProjectsPath, "utf-8"));
const teamMembers = JSON.parse(fs.readFileSync(teamMembersPath, "utf-8"));

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for featured projects
  app.get("/api/featured-projects", (req, res) => {
    res.json(featuredProjects);
  });

  // API routes for catalogue items
  app.get("/api/catalogue-items", (req, res) => {
    res.json(catalogueItems);
  });

  // API route for single catalogue item
  app.get("/api/catalogue-items/:id", (req, res) => {
    const item = catalogueItems.find((item: any) => item.id === req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  });

  // API route for similar items
  app.get("/api/catalogue-items/similar/:id", (req, res) => {
    const item = catalogueItems.find((item: any) => item.id === req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Get items in the same category, excluding the current item
    const similarItems = catalogueItems
      .filter((ci: any) => ci.category === item.category && ci.id !== req.params.id)
      .slice(0, 3);

    res.json(similarItems);
  });

  // API routes for team members
  app.get("/api/team-members", (req, res) => {
    res.json(teamMembers);
  });

  app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;
  
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your SMTP provider
      auth: {
        user: 'hindic830@gmail.com',
        pass: 'wxudywfocrfbsosi',
      },
    });
  
    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: 'Urbanvision73@gmail.com',
        subject: `New enquiry message from ${name}`,
        text: message,
        html: `
          <p>New contact form submission</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
  
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Email send error:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  }); 
  const httpServer = createServer(app);

  return httpServer;
}
