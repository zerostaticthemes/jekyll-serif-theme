---
title: 'Packer'
image: '/services/default.png'
---

Build Automated Machine Images.

Packer comes with support to build images for Amazon EC2, CloudStack, DigitalOcean, Docker, Google Compute Engine, Microsoft Azure, QEMU, VirtualBox, VMware, and more. Support for more platforms is on the way, and anyone can add new platforms via plugins.

## Machine Image

A machine image is a single static unit that contains a pre-configured operating system and installed software which is used to quickly create new running machines. Machine image formats change for each platform. Some examples include AMIs for EC2, VMDK/VMX files for VMware, OVF exports for VirtualBox, etc.

## Packer Template

The configuration file used to define what image we want built and how is called a template in Packer terminology. The format of a template is simple JSON. JSON struck the best balance between human-editable and machine-editable, allowing both hand-made templates as well as machine generated templates to easily be made.
