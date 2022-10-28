# How to Open Science: Promoting Principles and Reproducibility Practices within the Learning Analytics Community

[![OSF][badge]][osf]

*How to Open Science: Promoting Principles and Reproducibility Practices within the Learning Analytics Community* is a tutorial to be presented at the [*13th International Conference on Learning Analytics and Knowledge*][lak].

This project serves as the repository holding the webpage.

## License

The content of this Open Science Foundation project under the [Creative Commons Attribute 4.0 International License][cc4].

## Local Setup

### [Docker][docker] Container

Clone this repository and run the following commands:

```
docker build -t <image_name> .
docker run --rm -it -p 8000:8000 -v ${PWD}/src:/docs <image_name>
```

`image_name` can be specified to whatever identifier the user desires. This will run the docs server and expose it to the local host on port 8000.

### Python

This setup runs in Python 3.9.5. You can install the required libraries through the provided `requirements.txt`:

```
pip install -r requirements.txt
```

Then navigate to the folder in your terminal and serve the docs.

```
mkdocs serve
```

> You may need to prefix these commands with either `python3 -m` for Unix systems or `py -m` for Windows systems if the python modules were not properly installed onto the path.

## Citation

```
@misc{Haim_Shaw_Heffernan_2022,
  title={How to Open Science: Promoting Principles and Reproducibility Practices within the Learning Analytics Community},
  url={osf.io/4ubjy},
  DOI={10.17605/OSF.IO/4UBJY},
  publisher={OSF},
  author={Haim, Aaron and Shaw, Stacy T and Heffernan, Neil T, III},
  year={2022},
  month={Oct}
}
```

[badge]: https://img.shields.io/badge/OSF-10.17605%2Fosf.io%2F4ubjy-blue
[osf]: https://doi.org/10.17605/osf.io/4ubjy

[lak]: https://www.solaresearch.org/events/lak/lak23/

[cc4]: ./LICENSE

[docker]: https://www.docker.com/
