<?php

namespace App\Entity;

use App\Repository\ResourcesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ResourcesRepository::class)
 */
class Resources
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $author;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $path;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $alter_text;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title_img;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $licence;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $tag;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function setAuthor(?string $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getAlterText(): ?string
    {
        return $this->alter_text;
    }

    public function setAlterText(string $alter_text): self
    {
        $this->alter_text = $alter_text;

        return $this;
    }

    public function getTitleImg(): ?string
    {
        return $this->title_img;
    }

    public function setTitleImg(string $title_img): self
    {
        $this->title_img = $title_img;

        return $this;
    }

    public function getLicence(): ?string
    {
        return $this->licence;
    }

    public function setLicence(?string $licence): self
    {
        $this->licence = $licence;

        return $this;
    }

    public function getTag(): ?string
    {
        return $this->tag;
    }

    public function setTag(?string $tag): self
    {
        $this->tag = $tag;

        return $this;
    }
}
